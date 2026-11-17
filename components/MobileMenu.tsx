"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Link } from "@/i18n/navigation";
import type { routing } from "@/i18n/routing";

type StaticPathname = Exclude<
  keyof typeof routing.pathnames,
  `${string}[${string}]${string}`
>;

type SolutionGroup = {
  titleKey: string;
  title: string;
  items: { key: string; slug: string; label: string }[];
};

type MobileMenuProps = {
  navLinks: { label: string; href: StaticPathname }[];
  solutionGroups: SolutionGroup[];
  solutionsLabel: string;
  contactLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  navigationLabel: string;
};

const PANEL_ID = "mobile-nav-panel";
const emptySubscribe = () => () => {};

export default function MobileMenu({
  navLinks,
  solutionGroups,
  solutionsLabel,
  contactLabel,
  openMenuLabel,
  closeMenuLabel,
  navigationLabel,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setSolutionsExpanded(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const firstFocusable = panel?.querySelector<HTMLElement>(
      "button, a, [tabindex]"
    );
    firstFocusable?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center justify-center rounded-lg p-2 text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-300 dark:hover:text-brand-400"
        aria-label={open ? closeMenuLabel : openMenuLabel}
        aria-expanded={open}
        aria-controls={PANEL_ID}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {mounted &&
        createPortal(
          <div
            ref={panelRef}
            id={PANEL_ID}
            role="dialog"
            aria-label={navigationLabel}
            aria-modal={open}
            inert={!open ? true : undefined}
            className={`fixed inset-0 top-16 z-50 bg-white transition-opacity duration-200 ease-out md:hidden dark:bg-zinc-950 ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <nav className="mx-auto flex h-full max-w-lg flex-col overflow-y-auto px-6 py-8">
              <ul className="flex-1 space-y-1">
                <li>
                  <button
                    type="button"
                    onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                    aria-expanded={solutionsExpanded}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-900"
                  >
                    {solutionsLabel}
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className={`h-4 w-4 transition-transform ${solutionsExpanded ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
                    </svg>
                  </button>
                  {solutionsExpanded && (
                    <div className="mt-1 space-y-4 border-l border-zinc-100 pl-4 dark:border-zinc-800">
                      {solutionGroups.map((group) => (
                        <div key={group.titleKey}>
                          <Link
                            href={{ pathname: "/services", hash: group.titleKey }}
                            onClick={close}
                            className="mb-1 block px-3 text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                          >
                            {group.title}
                          </Link>
                          <ul className="space-y-0.5">
                            {group.items.map((item) => (
                              <li key={item.key}>
                                <Link
                                  href={{
                                    pathname: "/services/[slug]" as const,
                                    params: { slug: item.slug },
                                  }}
                                  onClick={close}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-zinc-600 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-brand-300"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-800">
                <Link
                  href="/contact"
                  onClick={close}
                  className="block w-full rounded-full bg-brand-600 px-4 py-3 text-center text-sm font-medium text-white no-underline transition-colors hover:bg-brand-700"
                >
                  {contactLabel}
                </Link>
              </div>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}

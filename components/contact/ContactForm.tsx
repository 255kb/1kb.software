"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type Props = {
  namePlaceholder: string;
  emailPlaceholder: string;
  organizationPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  nameLabel: string;
  emailLabel: string;
  organizationLabel: string;
  messageLabel: string;
  disclaimer: string;
};

export default function ContactForm({
  namePlaceholder,
  emailPlaceholder,
  organizationPlaceholder,
  messagePlaceholder,
  submitLabel,
  nameLabel,
  emailLabel,
  organizationLabel,
  messageLabel,
  disclaimer,
}: Props) {
  const t = useTranslations("contactForm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitSuccess(false);
    setApiError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("work_address")) return;

    const organization = String(data.get("organization") ?? "").trim();
    const message = String(data.get("contactMessage") ?? "");
    const payload = {
      contactName: String(data.get("contactName") ?? ""),
      contactEmail: String(data.get("contactEmail") ?? ""),
      contactMessage: organization ? `${organizationLabel}: ${organization}\n\n${message}` : message,
    };

    setIsSubmitting(true);
    try {
      const endpoint = process.env.NEXT_PUBLIC_SEND_EMAIL_API;
      if (!endpoint) throw new Error("NEXT_PUBLIC_SEND_EMAIL_API is not configured");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.status !== 200) throw new Error(`Contact request failed (${response.status})`);
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed", error);
      setApiError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          aria-busy={isSubmitting}
          className="relative flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contactName"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {nameLabel}
              </label>
              <input
                id="contactName"
                name="contactName"
                type="text"
                autoComplete="name"
                required
                placeholder={namePlaceholder}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-600 dark:focus:ring-brand-900"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contactEmail"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {emailLabel}
              </label>
              <input
                id="contactEmail"
                name="contactEmail"
                type="email"
                autoComplete="email"
                required
                placeholder={emailPlaceholder}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-600 dark:focus:ring-brand-900"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="organization"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {organizationLabel}
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              autoComplete="organization"
              placeholder={organizationPlaceholder}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-600 dark:focus:ring-brand-900"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contactMessage"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {messageLabel}
            </label>
            <textarea
              id="contactMessage"
              name="contactMessage"
              rows={5}
              required
              placeholder={messagePlaceholder}
              className="resize-none rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-600 dark:focus:ring-brand-900"
            />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 h-0 w-0 overflow-hidden opacity-0">
            <input type="text" name="work_address" autoComplete="off" tabIndex={-1} aria-label="Address" />
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{disclaimer}</p>
          {apiError && <p role="alert" className="text-sm font-medium text-red-600 dark:text-red-400">{t("error")} <a className="underline" href="mailto:contact@1kb.software">contact@1kb.software</a></p>}
          {submitSuccess && <p role="status" className="text-sm font-medium text-brand-700 dark:text-brand-300">{t("success")}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700 focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? t("sending") : submitLabel}
          </button>
        </form>

        <div className="flex flex-col justify-center gap-8 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              {emailLabel}
            </p>
            <a
              href="mailto:contact@1kb.software"
              className="mt-1 text-lg font-medium text-zinc-800 transition-colors hover:text-brand-600 dark:text-zinc-200 dark:hover:text-brand-400"
            >
              contact@1kb.software
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

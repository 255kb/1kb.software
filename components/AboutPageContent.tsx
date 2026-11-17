import AboutMission from "@/components/about/AboutMission";
import AboutWho from "@/components/about/AboutWho";
import LandingCta from "@/components/landing/LandingCta";
import LandingHero from "@/components/landing/LandingHero";
import { getAboutContent } from "@/lib/about";
import { renderMdx } from "@/lib/mdx";
import type { ComponentProps } from "react";

export default async function AboutPageContent({ locale }: { locale: string }) {
  const source = getAboutContent(locale);
  const MdxContent = await renderMdx(source, locale, {
    LandingHero: (props) => (
      <LandingHero
        {...(props as ComponentProps<typeof LandingHero>)}
        locale={locale}
      />
    ),
    AboutMission: (props) => (
      <AboutMission {...(props as ComponentProps<typeof AboutMission>)} />
    ),
    AboutWho: (props) => (
      <AboutWho {...(props as ComponentProps<typeof AboutWho>)} />
    ),
    LandingCta: (props) => (
      <LandingCta
        {...(props as ComponentProps<typeof LandingCta>)}
        locale={locale}
      />
    ),
  });

  return (
    <div className="flex flex-1 flex-col">
      <MdxContent />
    </div>
  );
}

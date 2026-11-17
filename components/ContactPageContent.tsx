import ContactForm from "@/components/contact/ContactForm";
import LandingHero from "@/components/landing/LandingHero";
import { getContactContent } from "@/lib/contact";
import { renderMdx } from "@/lib/mdx";
import type { ComponentProps } from "react";

export default async function ContactPageContent({ locale }: { locale: string }) {
  const source = getContactContent(locale);
  const MdxContent = await renderMdx(source, locale, {
    LandingHero: (props) => (
      <LandingHero
        {...(props as ComponentProps<typeof LandingHero>)}
        locale={locale}
      />
    ),
    ContactForm: (props) => (
      <ContactForm {...(props as ComponentProps<typeof ContactForm>)} />
    ),
  });

  return (
    <div className="flex flex-1 flex-col">
      <MdxContent />
    </div>
  );
}

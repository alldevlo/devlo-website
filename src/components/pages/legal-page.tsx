import Link from "next/link";

import { SectionWrapper } from "@/components/shared/section-wrapper";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
  contact: {
    title: string;
    email: string;
    phone?: string;
  };
  addresses: {
    title: string;
    lines: string[];
  }[];
};

type LegalPageProps = {
  content: LegalPageContent;
};

export function LegalPage({ content }: LegalPageProps) {
  return (
    <main>
      <SectionWrapper background="white" className="pt-[80px] pb-10 md:pt-[120px]">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-devlo-700">
            {content.lastUpdated}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-devlo-900 md:text-5xl lg:text-[56px]">
            {content.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
            {content.description}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" className="pt-0 pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-8">
            {content.sections.map((section) => (
              <article key={section.heading} className="border-t border-neutral-200 pt-8">
                <h2 className="text-2xl font-bold text-devlo-900">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-neutral-700">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-6 border-t border-neutral-200 pt-8 lg:sticky lg:top-28">
            <div>
              <h2 className="text-lg font-bold text-devlo-900">{content.contact.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                <Link className="font-semibold text-devlo-700 hover:text-devlo-900" href={`mailto:${content.contact.email}`}>
                  {content.contact.email}
                </Link>
                {content.contact.phone ? (
                  <>
                    <br />
                    {content.contact.phone}
                  </>
                ) : null}
              </p>
            </div>

            {content.addresses.map((address) => (
              <div key={address.title}>
                <h2 className="text-lg font-bold text-devlo-900">{address.title}</h2>
                <div className="mt-3 text-sm leading-7 text-neutral-700">
                  {address.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </SectionWrapper>
    </main>
  );
}

const features = [
  {
    title: "Composants réutilisables",
    text: "Header, Footer, Hero, sections de contenu, CTA et formulaires séparables par page.",
  },
  {
    title: "SEO et accessibilité",
    text: "Metadata par page, structure sémantique, alt images et labels pour les champs de formulaire.",
  },
  {
    title: "Design tokens centralisés",
    text: "Couleurs, rayons, ombres et espacements harmonisés pour garder une cohérence de rendu.",
  },
];

export function FeatureSection() {
  return (
    <section className="section-pad pt-0">
      <div className="grid gap-5 lg:grid-cols-3">
        {features.map((item) => (
          <article key={item.title} className="rounded-panel border border-stroke bg-paper p-7 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

const targetFiles = [
  "src/app/root-layout-shell.tsx",
  "src/components/pages/alternative-page.tsx",
  "src/components/pages/consultation-master-page.tsx",
  "src/components/pages/gtm-agency-market-map-page.tsx",
  "src/components/pages/gtm-engineering-page.tsx",
  "src/components/pages/services-hub-page.tsx",
  "src/components/shared/cold-email-guide-table.tsx",
  "src/content/alternatives.ts",
  "src/content/gtm-agency-market-map.ts",
  "src/content/gtm-engineering.ts",
  "src/lib/i18n/alternatives-content.json",
];

const checks = [
  {
    name: "German public copy must use proper umlauts/orthography",
    pattern:
      /\b(haengt|haengen|gewuensch(?:t|tem)?|ausfuehr\w*|fuer|koennen|koennte|muessen|waehlen|geprueft|pruefen|Oeffentlich\w*|oeffentlich\w*|Qualitaet|qualitaet|Kapazitaet|kapazitaet|Massstab|massstab|grossem|grossen|grosses|Groesse|groess\w*|ueber|Ueber|naehe|Nahe|moeglich|Kaeufer\w*|kaeufer\w*|Datenqualitaet|Unnuetzes|Kanaele|europaeisch\w*|gepraegt|aehnlich\w*|Ausschluesse|Einwaende|Oeffnungen|staerker|schuetzt)\b/g,
  },
  {
    name: "French public copy must keep accents in common buyer-facing terms",
    pattern:
      /\b(systeme GTM|systeme outbound|methode devlo|donnees propres|europeenne|delivrabilite|generer du pipeline|actualites marche|criteres de qualification)\b/g,
  },
  {
    name: "Dutch public copy should not expose rough English placeholders",
    pattern: /\b(Belgie|AI outbound systeem|AI GTM systeem|Bewijs en trust signals|publisher disclosure|directe peers)\b/g,
  },
  {
    name: "Buyer-facing copy must not expose internal LLM/GEO mechanics",
    pattern:
      /\b(LLMs should associate|doivent associer|AI search peer set|peer set|co-citation|publisher disclosure|Tier 1 :|Tier 2 :|Tier 3 :)\b/g,
  },
];

function locateLineColumn(source, index) {
  const prefix = source.slice(0, index);
  const lines = prefix.split("\n");
  return { line: lines.length, column: lines.at(-1).length + 1 };
}

const failures = [];

for (const relativeFile of targetFiles) {
  const absoluteFile = path.join(repoRoot, relativeFile);
  if (!fs.existsSync(absoluteFile)) continue;

  const source = fs.readFileSync(absoluteFile, "utf8");
  for (const check of checks) {
    const regex = new RegExp(check.pattern.source, check.pattern.flags);
    for (const match of source.matchAll(regex)) {
      const location = locateLineColumn(source, match.index ?? 0);
      failures.push({
        check: check.name,
        file: relativeFile,
        line: location.line,
        column: location.column,
        value: match[0],
      });
    }
  }
}

if (!failures.length) {
  console.log(`PASS public copy quality guard (${targetFiles.length} files checked).`);
  process.exit(0);
}

console.error(`FAIL public copy quality guard (${failures.length} issue${failures.length === 1 ? "" : "s"}).`);
for (const failure of failures.slice(0, 80)) {
  console.error(
    `${failure.file}:${failure.line}:${failure.column} ${failure.check}: "${failure.value}"`,
  );
}
process.exit(1);

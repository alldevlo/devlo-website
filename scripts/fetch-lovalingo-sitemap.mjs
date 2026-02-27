import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LOVALINGO_SITEMAP_URL = "https://cdn.lovalingo.com/sitemap/aix_qhj0o99zw8icbj8mg4e7x04rtp1wehsw.xml";
const OUTPUT_PATH = join(process.cwd(), "public", "sitemap.xml");

async function main() {
  const response = await fetch(LOVALINGO_SITEMAP_URL, {
    headers: {
      Accept: "application/xml,text/xml;q=0.9,*/*;q=0.8",
    },
  });

  if (response.status !== 200) {
    throw new Error(`Lovalingo sitemap fetch failed (${response.status}) from ${LOVALINGO_SITEMAP_URL}`);
  }

  const body = await response.text();
  const normalizedBody = body.trimStart();
  const isValidXmlRoot =
    normalizedBody.startsWith("<?xml") ||
    normalizedBody.startsWith("<urlset") ||
    normalizedBody.startsWith("<sitemapindex");

  if (!isValidXmlRoot) {
    throw new Error("Lovalingo sitemap is not valid XML (expected <?xml, <urlset, or <sitemapindex>)");
  }

  await mkdir(join(process.cwd(), "public"), { recursive: true });
  await writeFile(OUTPUT_PATH, body, "utf8");
  console.log(`Lovalingo sitemap written to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

import fs from "fs";
import path from "path";
import { getStaticPageRouteFilename, type StaticPageKey } from "@/lib/staticPageRoutes";

export function getStaticPageContent(category: StaticPageKey, locale: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    category,
    getStaticPageRouteFilename(category, locale)
  );
  return fs.readFileSync(filePath, "utf8");
}

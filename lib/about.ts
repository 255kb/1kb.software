import fs from "fs";
import path from "path";
import { getStaticPageRouteFilename } from "@/lib/staticPageRoutes";

const aboutDir = path.join(process.cwd(), "content/about");

export function getAboutContent(locale: string) {
  const filePath = path.join(aboutDir, getStaticPageRouteFilename("about", locale));
  return fs.readFileSync(filePath, "utf8");
}

import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import type { ComponentProps, ComponentType } from "react";

type MdxComponents = Record<string, ComponentType<unknown>>;

export async function renderMdx(
  source: string,
  locale?: string,
  components?: MdxComponents
) {
  const code = String(
    await compile(source, { outputFormat: "function-body" })
  );
  const { default: MdxContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  if (!locale) return MdxContent;

  return function LocalizedMdx() {
    return (
      <MdxContent
        components={{
          a: (props: ComponentProps<"a">) => {
            const href = props.href?.startsWith("/#")
              ? `/${locale}${props.href.slice(1)}`
              : props.href;
            return <a {...props} href={href} />;
          },
          ...(components ?? {}),
        }}
      />
    );
  };
}

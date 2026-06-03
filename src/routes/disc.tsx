import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/InternalPage";

export const Route = createFileRoute("/disc")({
  head: () => ({
    meta: [
      { title: "Análise DISC · R. Velozo" },
      { name: "description", content: "[Descrição será inserida posteriormente]" },
      { property: "og:title", content: "Análise DISC · R. Velozo" },
      { property: "og:description", content: "[Descrição será inserida posteriormente]" },
    ],
  }),
  component: () => <InternalPage eyebrow="Análise DISC" pageLabel="DISC" />,
});

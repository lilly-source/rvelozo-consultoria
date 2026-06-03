import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/InternalPage";

export const Route = createFileRoute("/consultoria")({
  head: () => ({
    meta: [
      { title: "Consultoria · R. Velozo" },
      { name: "description", content: "[Descrição será inserida posteriormente]" },
      { property: "og:title", content: "Consultoria · R. Velozo" },
      { property: "og:description", content: "[Descrição será inserida posteriormente]" },
    ],
  }),
  component: () => <InternalPage eyebrow="Consultoria" pageLabel="Consultoria" />,
});

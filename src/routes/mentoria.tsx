import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/InternalPage";

export const Route = createFileRoute("/mentoria")({
  head: () => ({
    meta: [
      { title: "Mentoria · R. Velozo" },
      { name: "description", content: "[Descrição será inserida posteriormente]" },
      { property: "og:title", content: "Mentoria · R. Velozo" },
      { property: "og:description", content: "[Descrição será inserida posteriormente]" },
    ],
  }),
  component: () => <InternalPage eyebrow="Mentoria" pageLabel="Mentoria" />,
});

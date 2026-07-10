import { createFileRoute } from "@tanstack/react-router";
import ClientApp from "@/components/ClientApp";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  getSitePreviewMeta,
  getSiteUrlMeta,
} from "@/lib/site-meta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      {
        name: "description",
        content: SITE_DESCRIPTION,
      },
      { property: "og:title", content: SITE_TITLE },
      {
        property: "og:description",
        content:
          "Launches and manages your projects with a streamlined interface.",
      },
      ...getSitePreviewMeta(),
      ...getSiteUrlMeta("/"),
    ],
  }),
  component: ClientApp,
});

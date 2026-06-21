import { createFileRoute } from "@tanstack/react-router";
import ClientApp from "@/components/ClientApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZARIFA COLLECTION — стилист для покрытых мусульманок" },
      {
        name: "description",
        content:
          "Персональный стилист для покрытых мусульманок. Шоппинг-туры в Стамбул, капсульные гардеробы и готовые образы — скромно, женственно и современно.",
      },
      { property: "og:title", content: "ZARIFA COLLECTION — стилист для покрытых мусульманок" },
      {
        property: "og:description",
        content:
          "Персональный стилист для покрытых мусульманок. Шоппинг-туры в Стамбул, капсульные гардеробы и готовые образы.",
      },
    ],
  }),
  component: ClientApp,
});

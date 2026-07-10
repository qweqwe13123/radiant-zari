export const SITE_URL = "https://www.zarifastore.com";
export const SITE_PREVIEW_IMAGE_PATH = "/hero-model.jpg";
export const SITE_PREVIEW_IMAGE_URL = `${SITE_URL}${SITE_PREVIEW_IMAGE_PATH}`;

export const SITE_TITLE = "ZARIFA COLLECTION — стилист для покрытых мусульманок";
export const SITE_DESCRIPTION =
  "Персональный стилист для покрытых мусульманок. Шоппинг-туры в Стамбул, разбор гардероба, готовые капсулы и образы.";
export const SITE_NAME = "Zarifastore";

export const getSitePreviewMeta = () => [
  { property: "og:image", content: SITE_PREVIEW_IMAGE_URL },
  { property: "og:image:secure_url", content: SITE_PREVIEW_IMAGE_URL },
  { property: "og:image:type", content: "image/jpeg" },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: SITE_NAME },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: SITE_TITLE },
  { name: "twitter:description", content: SITE_DESCRIPTION },
  { name: "twitter:image", content: SITE_PREVIEW_IMAGE_URL },
];

export const getSiteUrlMeta = (pathname: string) => [
  { property: "og:url", content: `${SITE_URL}${pathname}` },
];

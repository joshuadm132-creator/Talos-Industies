
// config/site.ts
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://valistech.vercel.app";

export const site = {
  url: siteUrl,
  name: "Valis Technologies",
  shortName: "Valis Tech",
  description:
    "Valis Technologies builds custom websites, web apps, and AI-assisted digital infrastructure for growing businesses in Zimbabwe and Southern Africa.",
  locale: "en_ZW",
  country: "ZW",
  city: "Harare",
//   twitterHandle: "@valistech", // update if you have one
  defaultOgImage: "ValisLogo.png", // add this image to /public
};
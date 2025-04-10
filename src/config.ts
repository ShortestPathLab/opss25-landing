import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://pathfinding.ai/", // replace this with your deployed domain
  baseUrl: "summer-school-2025",
  author: "Kevin Zheng",
  desc: "Summer school of optimisation and planning 2025.",
  title: "SSAI 2025",
  ogImage: "ssai-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: [], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = { enable: false, svg: false, width: 32, height: 32 };

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/shortestpathlab",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];

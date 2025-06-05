import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  domain: "opss25.pathfinding.ai",
  website: "https://opss25.pathfinding.ai/", // replace this with your deployed domain
  baseUrl: "/",
  author: "Kevin Zheng",
  desc: "Summer school of optimisation and planning 2025.",
  title: "Optimisation and planning summer school",
  ogImage: "opss-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: [], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 16 * 3,
  height: 16,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/shortestpathlab",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];

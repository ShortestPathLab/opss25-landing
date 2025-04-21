import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export function CardBase({
  primary,
  secondary,
  description,
  secHeading,
  href,
  slug,
}: {
  primary?: string;
  secondary?: ReactNode;
  description?: ReactNode;
  href?: string;
  secHeading?: boolean;
  slug?: string;
}) {
  const headerProps = {
    style: { viewTransitionName: slugifyStr(slug ?? primary ?? "") },
    className: href ? `hover:underline` : "",
  };
  return (
    <li className="my-6 list-none">
      <a
        href={href}
        className={`mb-2 inline-block text-lg font-normal ${href ? "underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0" : ""}`}
      >
        {true ? (
          <h2 {...headerProps}>{primary}</h2>
        ) : (
          <h3 {...headerProps}>{primary}</h3>
        )}
      </a>
      <p className="text-sm">{secondary}</p>
      <div className="mt-2">{description}</div>
    </li>
  );
}
export function ProgramEventCard({
  primary,
  description,
  image,
}: {
  image?: string;
  primary?: string;
  description?: ReactNode;
}) {
  return (
    <li className="animate-fadeIn my-3 flex-1 list-none">
      {image && (
        <div
          className="mb-2 h-32 w-full rounded-md bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}
      <h2 className={`mb-1 inline-block font-normal`}>{primary}</h2>
      <div className="text-sm opacity-80">{description}</div>
    </li>
  );
}
export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  return (
    <CardBase
      href={href}
      secHeading={secHeading}
      primary={title}
      description={description}
      secondary={
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      }
    />
  );
}

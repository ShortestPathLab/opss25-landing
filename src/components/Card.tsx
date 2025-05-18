import { slugifyStr } from "@utils/slugify";
import { useEffect, useRef, type ComponentProps, type ReactNode } from "react";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  frontmatter: any;
  secHeading?: boolean;
}

export function CardBase({
  primary,
  secondary,
  description,
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

export function ParallaxImage({
  image,
  offset = "50%",
  ...props
}: {
  image?: string;
  offset?: string;
} & ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const f = () => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const y = top + height / 2 - window.innerHeight / 2;

        ref.current.style.backgroundPositionY = `calc(${offset} + ${y * -0.1}px)`;
      }
    };
    document.addEventListener("scroll", f, { signal });

    f();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div
      ref={ref}
      {...props}
      className={`h-32 w-full rounded-md bg-cover bg-center ${props.className}`}
      style={{
        backgroundImage: `url(${image})`,
        ...props.style,
      }}
    >
      <slot />
    </div>
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

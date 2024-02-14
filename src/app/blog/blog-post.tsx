import Link from "next/link";
import Button from "../components/button";

type PostProps = {
  title: string;
  excerpt: string;
  author?: string;
  slug: string;
  className: string;
};

export default function BlogPost({
  title,
  slug,
  excerpt,
  className,
}: PostProps) {
  return (
    <div className={className}>
      <Link
        href={`/blog/${slug}`}
        className="text-lg text-violet-800 hover:text-violet-900 font-bold text-[1.3rem] tracking-wide uppercase transition-all"
      >
        {title}
      </Link>
      <p className="mt-2 mb-6">
        {excerpt
          .slice(3, -5)
          .replaceAll("&#8217;", `'`)
          .replaceAll("&hellip;", `...`)}
      </p>
      <Button href={`/blog/${slug}`}>Read more</Button>
    </div>
  );
}

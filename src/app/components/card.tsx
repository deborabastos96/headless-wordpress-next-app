import Image from "next/image";
import Link from "next/link";
import Button from "./button";

type CardProps = {
  title?: string;
  subtitle?: string;
  btnLabel?: string;
  thumbnail: string;
  href: string;
};

export default function Card({
  title,
  subtitle,
  thumbnail,
  btnLabel,
  href,
}: CardProps) {
  return (
    <div className="text-center">
      <Link href={href}>
        <Image
          className="block mx-auto mb-4 rounded-lg shadow-md"
          width="600"
          height="400"
          src={thumbnail}
          alt="card thumbnail image"
        />
      </Link>
      <div className="font-light uppercase tracking-wider text-center text-xl mb-6">
        {title}
      </div>
      <div className="text-center text-md mb-4">{subtitle}</div>
      <Button href={href}>{btnLabel}</Button>
    </div>
  );
}

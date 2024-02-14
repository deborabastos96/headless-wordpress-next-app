import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
};

export default function Button({
  children,
  href,
  type,
  className,
}: ButtonProps) {
  const styles = `shadow-md py-3 px-5 uppercase text-sm tracking-widest text-violet-50 rounded-full font-semibold bg-violet-800 hover:bg-violet-900 transition-colors ${
    className || ""
  }`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto p-8 grid gap-[8rem]">
      <div className="grid grid-cols-[1.5fr_1fr] gap-5 items-center">
        <div>
          <h1 className="text-[4.2rem] font-bold mb-3 tracking-tighter leading-none">
            Welcome to Headless WordPress Next-App
          </h1>
          <h2 className="uppercase font-light tracking-widest text-xl">
            Crafting Dynamic Web Experiences
          </h2>
        </div>

        <div>
          <Image
            className="scale-x-[-1]"
            width="400"
            height="50"
            src="builder.svg"
            alt="Building a website"
          />
        </div>
      </div>

      <p className="text-[2rem] font-light">
        Hi there! I&apos;m Débora Bastos, a passionate web developer
        specializing in crafting dynamic and efficient web experiences. With a
        focus on Headless WordPress, Next.js, and TypeScript, I thrive on
        pushing the boundaries of modern web development to create seamless and
        engaging user experiences.
      </p>
    </section>
  );
}

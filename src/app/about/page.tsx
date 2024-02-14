import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          About
        </h1>
        <div className="flex items-center justify-center gap-[4rem]">
          <Image
            className="scale-x-[-1]"
            width="400"
            height="50"
            src="wordpress.svg"
            alt="Building a website"
          />
          <p className="text-[1.6rem] font-light">
            Hi there! I&apos;m Débora Bastos, a passionate web developer
            specializing in crafting dynamic and efficient web experiences. With
            a focus on Headless WordPress, Next.js, and TypeScript, I thrive on
            pushing the boundaries of modern web development to create seamless
            and engaging user experiences.
          </p>
        </div>
      </section>
    </div>
  );
}

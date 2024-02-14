import Image from "next/image";
import { reqUrl } from "../config";

export default async function Page({ params }: any) {
  const req = await fetch(
    `${reqUrl}/pages?_fields=id,slug,title,content&slug=${params.slug}`,
    {
      cache: "no-store",
    }
  );
  const pages = await req.json();
  const page = pages[0];

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          {page.title.rendered}
        </h1>
        <div className="flex items-center justify-center gap-[4rem]">
          <Image
            className="scale-x-[-1]"
            width="400"
            height="50"
            src="wordpress.svg"
            alt="Building a website"
          />
          <div
            className="text-[1.6rem] font-light"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          ></div>
        </div>
      </section>
    </div>
  );
}

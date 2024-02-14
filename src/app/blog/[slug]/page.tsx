import { reqUrl } from "@/app/config";

export default async function BlogPostDetails({ params }: any) {
  const req = await fetch(
    `${reqUrl}/posts?_fields=title,content&slug=${params.slug}`
  );
  const posts = await req.json();
  const post = posts[0];
  const { title, content } = post;

  return (
    <div className="container mx-auto p-8 font-light">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          {title.rendered}
        </h1>
        <div className="mx-auto text-[1.4rem]">
          {content.rendered.split("<p>").join("").split("</p>").join("\n")}
        </div>
      </section>
    </div>
  );
}

import { reqUrl } from "../config";
import BlogPost from "./blog-post";

export default async function Blog() {
  const req = await fetch(`${reqUrl}/posts?_fields=id,slug,title,excerpt`, {
    cache: "no-store",
  });
  const posts = await req.json();

  console.log(posts);

  return (
    <div className="container mx-auto p-8">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          Blog
        </h1>

        <div className="mx-auto grid grid-cols-3 gap-[4rem]">
          {posts.map(({ title, slug, id, excerpt }: any) => (
            <BlogPost
              title={title.rendered}
              slug={slug}
              className="mb-4 shadow-xl rounded-lg p-[2rem]"
              excerpt={excerpt.rendered}
              key={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

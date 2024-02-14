import Card from "../components/card";
import { reqUrl } from "../config";

export default async function Products() {
  const req = await fetch(
    `${reqUrl}/products?acf_format=standard&_fields=id,title,acf,slug`,
    { cache: "no-store" }
  );
  const products = await req.json();

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          Products
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {products.map(({ title, id, acf, slug }: any) => (
            <Card
              key={id}
              title={title.rendered}
              category={acf.category.name}
              href={`/products/${slug}`}
              thumbnail={acf.thumbnail}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

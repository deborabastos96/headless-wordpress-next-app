import Card from "../components/card";
import { reqUrl } from "../config";

// const reqUrl =
//   "http://next-app-debora.infinityfreeapp.com/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,acf";

export default async function Products() {
  const req = await fetch(
    `${reqUrl}/service?acf_format=standard&_fields=id,title,type,slug`
  );
  const products = await req.json();

  // console.log(products);

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {products.map(({ title, id, type, slug }: any) => (
            <Card
              title={title.rendered}
              // subtitle={type}
              btnLabel="Learn More"
              href={`/products/${slug}`}
              thumbnail="https://perthvacatecleaning.com.au/wp-content/uploads/bb-plugin/cache/cleaning-sink-square.webp"
              key={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

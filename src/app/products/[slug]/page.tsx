import Image from "next/image";
import { reqUrl } from "../../config";

export default async function Products({ params }: any) {
  const req = await fetch(
    `${reqUrl}/products?acf_format=standard&_fields=title,acf&slug=${params.slug}`
  );
  const products = await req.json();
  const product = products[0];

  const { title, acf } = product;

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          {title.rendered}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              className="block mx-auto mb-4 rounded-xl shadow-lg"
              width="600"
              height="400"
              src={acf.large_image}
              alt="featured product image"
            />
          </div>
          <div>
            <div className="font-semibold mb-1">Category</div>
            <div className="text-lg mb-8">{acf.category.name}</div>
            <div className="font-semibold mb-1">Summary</div>
            <div className="text-lg mb-8">{acf.summary}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

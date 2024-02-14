import Image from "next/image";
import { reqUrl } from "../../config";

export default async function Products({ params }: any) {
  const req = await fetch(
    `${reqUrl}/service?acf_format=standard&_fields=id,title,type,slug,content&slug=${params.slug}`
  );
  const products = await req.json();
  const product = products[0];
  const { title, slug, id, type, content } = product;

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          {title.rendered}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              className="block mx-auto mb-4"
              width="600"
              height="400"
              src="https://perthvacatecleaning.com.au/wp-content/uploads/bb-plugin/cache/cleaning-sink-square.webp"
              alt="featured product image"
            />
          </div>
          <div>
            <div className="font-semibold mb-1">
              {type.split("")[0].toUpperCase() + type.slice(1)}
            </div>
            <div className="text-lg mb-8">Vacate Cleaning</div>
            <div className="font-semibold mb-1">Summary</div>
            <div className="text-lg mb-8">{content.rendered.slice(4, -5)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

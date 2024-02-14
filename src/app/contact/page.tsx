import Form from "./form";

export default function Contact() {
  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-[3.2rem] text-center font-bold mb-[4rem] mt-8 tracking-tight">
          Contact
        </h1>
        <div className="max-w-2xl mx-auto">
          <Form />
        </div>
      </section>
    </div>
  );
}

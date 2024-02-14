import Navigation from "./navigation";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto p-8 text-center bg-violet-800 text-violet-50 uppercase tracking-[2px] text-md font-normal">
        <Navigation />
        <hr />
      </div>
    </header>
  );
}

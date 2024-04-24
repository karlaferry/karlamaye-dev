import About from "./components/About";
import Avatar from "./components/Avatar";

export default function Home() {
  return (
    <main className="flex lg:flex-row lg:items-start items-center flex-col container mx-auto my-10">
      <div className="justify-center">
        <Avatar />
      </div>
      <About />
    </main>
  );
}

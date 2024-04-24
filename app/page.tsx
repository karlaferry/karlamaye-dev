import About from "./components/about";
import Avatar from "./components/avatar";

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

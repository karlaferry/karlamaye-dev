import About from "./components/about";
import Avatar from "./components/avatar";

export default function Home() {
  return (
    <main className="flex items-center lg:flex-row flex-col container mx-auto">
      <div className="justify-center">
        <Avatar />
      </div>
      <About />
    </main>
  );
}

import About from "./components/about";
import Avatar from "./components/avatar";

export default function Home() {
  return (
    <main className="flex m:flex-wrap container mx-auto">
      <Avatar />
      <About />
    </main>
  );
}

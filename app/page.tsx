import About from "./components/about";
import Avatar from "./components/avatar";

export default function Home() {
  return (
    <main className="flex">
      <Avatar />
      <About />
    </main>
  );
}

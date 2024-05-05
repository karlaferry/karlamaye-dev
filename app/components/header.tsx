import NavBar from "./NavBar";

export default function Header({ children }: any) {
  return (
    <>
      <NavBar>{children}</NavBar>
    </>
  );
}

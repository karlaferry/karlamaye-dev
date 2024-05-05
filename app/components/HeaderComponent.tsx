import NavBar from "./NavBar";

export default function HeaderComponent({ children }: any) {
  return (
    <>
      <NavBar>{children}</NavBar>
    </>
  );
}

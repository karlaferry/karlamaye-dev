import NavBar from "./NavBar";

export default function header({ children }: any) {
  return (
    <>
      <NavBar>{children}</NavBar>
    </>
  );
}

import Nav from "./Nav";
import Main from "./Main";

export default function HomeLayout() {
  return (
    <div className="flex flex-col gap-4 pt-24">
      <Nav />
      <Main />
    </div>
  );
}
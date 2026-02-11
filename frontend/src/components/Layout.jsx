import { Outlet } from "react-router"; // or "react-router"
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet /> {/* This is where FormPage or ImageForm will appear */}
      </main>
    </>
  );
};

export default Layout;
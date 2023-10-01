import { Outlet } from "react-router-dom";
import Header from "../../Componets/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;

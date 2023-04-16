import { Outlet, useLocation } from "react-router-dom";
import Header from "../Layouts/header";

/**
 * This is the default page layout (Parent) of website which will be constant throught. (i.e the header and footer part need not to be called explicitly in every page's component.
 * NOTE : An <Outlet> should be used in parent route elements to render their child route elements
 */

export default function Layout1() {
  return (
    <div className="flex flex-col max-h-screen max-w-md">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

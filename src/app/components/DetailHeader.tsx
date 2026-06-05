import Image from "next/image";
import CartIcon from "./ui/CartIcon";
import UserIcons from "./ui/UserIcons";

export default function DetailHeader() {
  return (
    // navigation menu
    <div className="fixed top-0 w-full bg-white z-10">
      <div className="relative flex shadow-sm h-[70px] items-center px-5 justify-between">
        <div className="flex items-center h-full ">
          <div className="h-[50px] relative">
            <Image src="logo.svg" className="h-full" alt="" fill />
          </div>
          <nav className="h-full relative"></nav>
        </div>

        <div className="flex items-center gap-12">
          <UserIcons />
          <CartIcon />
        </div>
      </div>
    </div>
  );
}

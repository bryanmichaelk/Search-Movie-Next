import React from "react";
import Image from "next/image";
import Search from "../molecules/Search";
import Link from "next/link";

function Navbar(props) {
  const { onSubmit, onChange, withSearch} = props;
  return (
    <nav className="fixed top-0 right-0  w-full bg-white border-b border-gray-100 drop-shadow-lg z-10">
      <div className="flex items-center justify-between px-2 py-2 max-w-[1280px] m-auto">
        <Link href="/">
          <Image
            src="/navbar/movie-logo.png"
            alt="logo"
            width={125}
            height={50}
            className=""
          />
        </Link>
        {withSearch && <Search onSubmit={onSubmit} onChange={onChange} />}
      </div>
    </nav>
  );
}

export default Navbar;

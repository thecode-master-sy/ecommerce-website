"use client"
import { Menu, ShoppingCart, Search } from "lucide-react"
import {motion} from "framer-motion"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useNavBarContext } from "@/contexts/NavbarContext";

const NavBarVariants = {
  animate: {
    backgroundColor: "#F2F1F1",
    borderBottomWidth: "1px",
    borderColor: "rgba(38, 43, 46, 0.2)"
  }
}

export default function NavBar(){
  const headerRef = useRef<HTMLDivElement>(null);
  const NavBarContext = useNavBarContext()

  useEffect(() => {
    const NavBarBounds = headerRef.current?.getBoundingClientRect() ?? null;
    NavBarContext?.setNavBarBounds(NavBarBounds);
  }, [])

  return (
    <motion.header variants={NavBarVariants} animate={ NavBarContext?.overlaping ? "animate" : ""} ref={headerRef} className="fixed top-0 left-0 right-0 col-span-12 py-3 pl-2 pr-2 z-20">
      <nav className="col-span-12 grid grid-cols-12 items-center">
        <h1 className="uppercase font-medium text-body">LOGO</h1>

        <div className="flex gap-2 place-self-center col-start-6 items-center">
          <Menu width={16}/>
          <span className="uppercase">Menu</span>
        </div>


        <div className="col-start-10 flex items-center col-span-3 justify-end gap-7">
          <div className="hidden md:flex items-center">
            <Search size={16} /> 
          </div>

          <div className="hidden md:flex items-center">
            <Link href={"/shop"} className="uppercase">Shop</Link> 
          </div>

          <div className="flex items-center gap-2">
            <ShoppingCart width={16} />
            <span className="uppercase">cart</span>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

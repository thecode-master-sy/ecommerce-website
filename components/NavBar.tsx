"use client";
import { Menu, ShoppingCart, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useNavBarContext } from "@/contexts/NavbarContext";

const NavBarVariants = {
	animate: {
		backgroundColor: "#F2F1F1",
		borderBottomWidth: "1px",
		borderColor: "rgba(38, 43, 46, 0.2)",
	},
};

export default function NavBar() {
	const headerRef = useRef<HTMLDivElement>(null);
	const NavBarContext = useNavBarContext();

	useEffect(() => {
		const NavBarBounds = headerRef.current?.getBoundingClientRect() ?? null;
		NavBarContext?.setNavBarBounds(NavBarBounds);
	}, []);

	return (
		<motion.header
			variants={NavBarVariants}
			animate={NavBarContext?.overlaping ? "animate" : ""}
			ref={headerRef}
			className="fixed top-0 left-0 right-0 col-span-12 py-3 pl-2 pr-2 z-20"
		>
			<nav className="col-span-12 flex justify-between items-center">
				<div>
					<div className="flex gap-2 items-center">
						<Menu width={16} />
						<span className="uppercase">menu</span>
					</div>
				</div>

				<div>
					<h1 className="uppercase">logo</h1>
				</div>

				<div className="flex items-center col-span-3s gap-7">
					<div className="hidden md:flex items-center">
						<Link href={"/shop"} className="uppercase">
							Shop
						</Link>
					</div>

					<div className="hidden md:flex items-center gap-2">
						<Search size={16} />
						<span className="uppercase">search</span>
					</div>

					<div className="flex items-center gap-2">
						<ShoppingCart width={16} />
						<span className="uppercase">cart</span>
					</div>
				</div>
			</nav>
		</motion.header>
	);
}

import { Menu, ShoppingCart, Search } from "lucide-react"
import Link from "next/link";

export default function NavBar(){
  return (
    <header className="col-span-12 pt-2 pl-2 pr-2">
      <nav className="col-span-12 grid grid-cols-12 items-center">
        <h1 className="text-header-three">LOGO</h1>

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
    </header>
  )
}

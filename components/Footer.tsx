import Button from "@/components/Button"
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-48 grid gap-10">
       <div className="px-2 max-w-[700px]">
        <h2 className="text-header-three font-bold uppercase">Recieve latest updates on products and discounts</h2>
        <div className="flex flex-col md:flex-row gap-2 mt-2">
         <input type="search" className="w-full md:flex-grow border px-2 py-2 rounded-md border-input-border bg-ecommerce-light  text-input-border" name="search" placeholder="enter your email address"/>
         <Button showArrow={false}>Subscribe</Button>
        </div>
       </div> 

      <div className="overflow-hidden">
        <h1 className="uppercase text-stroke font-bold overflow-hidden">Logo.Logo. Logo.</h1>
      </div>

      <div className="px-2">
        <div className="grid">
         <a className="uppercase">twitter</a>
         <a className="uppercase">Instagram</a>
         <a className="uppercase">whatsapp</a>
        </div>

        <div className="flex gap-16 flex-wrap mt-7">
           <div className="grid">
             <Link href={"/"} className="uppercase">Home</Link>
             <Link href={"/contact"} className="uppercase">Contact</Link>
             <Link href={"/about-us"} className="uppercase">About Us</Link>
           </div>

           <div className="grid">
             <Link href={"/"} className="uppercase">Featured</Link>
             <Link href={"/contact"} className="uppercase">Latest</Link>
             <Link href={"/about-us"} className="uppercase">shop</Link>
           </div>

           <div className="grid">
             <Link href={"/"} className="uppercase">Laptops</Link>
             <Link href={"/contact"} className="uppercase">Phones</Link>
             <Link href={"/about-us"} className="uppercase">Headsets</Link>
           </div>

           <div className="grid">
             <Link href={"/"} className="uppercase">Mouse</Link>
             <Link href={"/contact"} className="uppercase">keyboards</Link>
           </div>

           <div className="hidden md:grid">
             <Link href={"/"} className="uppercase">Privacy Policy</Link>
             <Link href={"/contact"} className="uppercase">Terms and Condition</Link>
           </div>

        </div>

      </div>

      <div className="flex justify-between items-center border border-t-foreground py-4 px-2">
         <span>2023</span>
         <span>@copywright</span>
      </div>
    </div>
  )
}

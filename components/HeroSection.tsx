import Button from "./Button";
import HeroSlider from "./HeroSlider";

export default function HeroSection() {
  return (
    <div className="grid grid-rows-[max-content,_1fr]  col-span-12 relative mt-7 px-2 md:px-0 min-h-[85vh] overflow-hidden">
        <div className="relative z-10 mix-blend-difference md:pl-2 w-full  border border-black">
          <h1 className="uppercase text-header font-bold ">Get the latest laptops and tech accessories</h1>
        </div>

        <HeroSlider/> 

        <div className="hidden md:block mt-auto col-span-12">
          <form className="flex gap-2 w-full justify-center">
            <input type="search" className="w-[35%] border px-2 py-1 rounded-md border-input-border bg-ecommerce-light  text-input-border" name="search" placeholder="what are you looking for"/>
            <Button showArrow={false}>search product</Button>
          </form>
        </div> 
    </div>
  )
}

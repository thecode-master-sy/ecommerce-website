import FeaturedProductsSlider from "./FeaturedProductsSlider";
import Button from "@/components/Button";

export default function FeaturedProducts() {
  return (
      <div className="col-span-12 px-2 overflow-hidden">
        <h1 className="text-header-two uppercase font-bold">Featured Products</h1>

        <FeaturedProductsSlider/>  

        <div className="flex justify-center mt-7">
          <Button showArrow>checkout featured products</Button>
        </div> 
    </div>
  )
}

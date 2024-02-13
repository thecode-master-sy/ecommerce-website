import ProductsSlider from "./ProductsSlider";
import Button from "@/components/Button";
import { featuredProductsArray } from "@/utils/featuredProducts-data";

export default function FeaturedProducts() {
  return (
      <div className="col-span-12 overflow-hidden">
        <h1 className="text-header-two uppercase font-bold px-2">Featured Products</h1>

        <ProductsSlider products={featuredProductsArray}/>  

        <div className="flex justify-center mt-7">
          <Button showArrow>checkout featured products</Button>
        </div> 
    </div>
  )
}

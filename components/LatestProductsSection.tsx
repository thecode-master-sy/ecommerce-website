import { featuredProductsArray } from "@/utils/featuredProducts-data";
import ProductsSlider from "./ProductsSlider";
import Button from "@/components/Button";

export default function FeaturedProducts() {
  return (
      <div className="col-span-12 px-2 overflow-hidden">
        <h1 className="text-header-two uppercase font-bold">Latest Products</h1>

        <ProductsSlider products={featuredProductsArray}/>  

        <div className="flex justify-center mt-7">
          <Button showArrow>checkout latest products</Button>
        </div> 
    </div>
  )
}

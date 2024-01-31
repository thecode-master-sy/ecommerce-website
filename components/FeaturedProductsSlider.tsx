import { featuredProductsArray } from "@/utils/featuredProducts-data";
import FeaturedProducts from "./FeaturedProducts";

export default function FeaturedProductsSlider() {
  return (
    <div className="mt-7 flex gap-10">
      {
        featuredProductsArray.map((product, index) => (
          <FeaturedProducts imageSrc={product.src} productName={product.productName} productPrice={product.price} key={index}/>
        ))
      }
    </div>
  )
}

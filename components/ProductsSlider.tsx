import {StaticImageData} from "next/image";
import FeaturedProducts from "./ProductCard";
import Slider from "@/components/Slider";

type Product = {
  src: StaticImageData;
  productName: string;
  price: string;
}

export default function ProductsSlider({products}:{products: Product[]}) {
  return (
    <Slider className="mt-7">
      {
        products.map((product, index) => (
          <FeaturedProducts imageSrc={product.src} productName={product.productName} productPrice={product.price} key={index}/>
        ))
      }
    </Slider>
  )
}

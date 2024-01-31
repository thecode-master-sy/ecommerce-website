import Image, { StaticImageData } from "next/image";
import { ShoppingCartIcon } from "lucide-react";


export default function FeaturedProducts({imageSrc, productName, productPrice}: {imageSrc: StaticImageData, productName: string, productPrice: string}) {
   return (
    <div className="grid bg-ecommerce-light min-w-72 md:min-w-96 p-5">
      <div className="relative w-full flex items-center justify-center p-12">
          <Image width={100} height={100} src={imageSrc} alt="headset image"/>
      </div>        

      <div className="align-self-end flex flex-col justify-end">
        <p className="uppercase text-base">{productName}</p> 
        <div className="flex justify-between items-center">
          <span className="text-header-three">{productPrice}</span>
          <span className="flex items-center gap-2">
            <span className="uppercase">Add to cart</span>
            <ShoppingCartIcon/>
          </span>
        </div>
      </div>
    </div>
  )
}

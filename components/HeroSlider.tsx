import SliderElement from "./SliderElement";
import {categoryDatas} from "@/utils/category-data";


export default function HeroSlider() {
  return (
    <div className="flex flex-col md:flex-row md:absolute top-0 left-1/2 gap-28 col-span-12 mt-4 md:mt-0">
      {
        categoryDatas.map((categoryData, index) => (
          <SliderElement href={categoryData.href} category={categoryData.category} key={index}/>
        ))
      } 
    </div>
  )
}

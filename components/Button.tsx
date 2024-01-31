import { ArrowRight } from "lucide-react"

export default function Button({children, showArrow}: {children: React.ReactNode, showArrow: boolean}) {
  return (
    <button className="flex gap-1 justify-center items-center bg-ecommerce-light rounded-md border border-foreground px-4 py-2 min-w-40">
      <span className="uppercase  block">
        {children} 
      </span>
      {
        showArrow && (<ArrowRight size={16} />)
      }
    </button>
  )
}

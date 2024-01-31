import HeroSection from "@/components/HeroSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import ProductOfDaySection from "@/components/ProductOfDaySection";
import LatestProductsSection from "@/components/LatestProductsSection";
import DiscountSection from "@/components/DiscountSection";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-y-48">
        <HeroSection/>         
        <FeaturedProductsSection/>
        <ProductOfDaySection/>
        <LatestProductsSection/>
        <DiscountSection/>
    </main>
  );
}

import BrandSection from "@/components/home/brandSection/BrandSection";
import CategoriesContent from "@/components/home/CategoriesSection/CategoriesContent";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import HighLightingProductsSection from "@/components/home/HighLightingProducts/HighLightingProductsSection";
import PromotionalSection from "@/components/home/promotionalSection/promotionalSection"
import TrustSection from "@/components/home/trustSection/TrustSection";


export default function Home() {
  return (
      <>
      <HeroSection/>
      <div className="py-5">
      <CategoriesContent/>
      <HighLightingProductsSection/>
      <PromotionalSection/>
      <BrandSection/>
      <TrustSection/>
      </div>
      
      </>
    
  );
}

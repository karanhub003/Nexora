import { SocialIcon } from "react-social-icons";
import {
  categoriesLinks,
  companyLinks,
  customerCare,
  shopLinks,
} from "@/data/footer";
import Link from "next/link";

import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <>
    <div className="FooterContainer max-w-370 mx-auto px-3.5 py-6  ">
      <div className="topSide grid grid-cols-[350px_1fr] ">
        <div className="leftSide">
          <div className="infoWrapper flex flex-col gap-1.5">
            <h3 className="text-[22px] font-display font-bold tracking-[5px] uppercase text-white">
              nexora
            </h3>
            <p className="text-white font-body font-semibold text-[14px]">
              Products for a better tomorrow.
            </p>
            <p className="text-[12px] text-[#9B968E] font-medium font-body w-60">
              Discover thoughtfully selected products that blend innovation,
              quality and style.
            </p>
          </div>
          <div className="socialIconWrapper border flex items-center mt-1.5 gap-4 ">
            <SocialIcon
              style={{ width: 40, height: 40 }}
              url="https://instagram.com"
              href="https://instagram.com"
              label="Instagram"
              fgColor="#9B968E"
              bgColor="transparent"
            />
            <SocialIcon
              style={{ width: 24, height: 24 }}
              url="https://facebook.com"
              href="https://facebook.com"
              label="Facebook"
              bgColor="#9B968E"
            />
            <SocialIcon
              style={{ width: 40, height: 40 }}
              url="https://youtube.com"
              href="https://youtube.com"
              label="Youtube"
              fgColor="#9B968E"
              bgColor="transparent"
            />
            <SocialIcon
              style={{ width: 40, height: 40 }}
              url="https://linkedin.com"
              href="https://linkedin.com"
              label="Linkedin"
              fgColor="#9B968E"
              bgColor="transparent"
            />
          </div>
        </div>

        <div className="rightSide  grid grid-cols-4  ">
          <div className="shopWrapper p-1.5 ">
            <h2 className="text-[15px] font-semibold font-display text-white">
              Shop
            </h2>
            <div className=" flex flex-col gap-1 text-[#9B968E] list-none ">
              {shopLinks.map((links) => (
                <li key={links.id}>
                  <Link href="/">
                    <ul>{links.name}</ul>
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <div className="categoriesWrapper p-1.5 ">
            <h2 className="text-[15px] font-semibold font-display text-white">
              Categories
            </h2>
            <div className="flex flex-col gap-1 text-[#9B968E] list-none ">
              {categoriesLinks.map((links) => (
                <li key={links.id}>
                  <Link href="/">
                    <ul>{links.name}</ul>
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <div className="customerCareWrapper p-1.5 ">
            <h2 className="text-[15px] font-semibold font-display text-white">
              Customer Care
            </h2>
            <div className=" flex flex-col gap-1 text-[#9B968E] list-none ">
              {customerCare.map((links) => (
                <li key={links.id}>
                  <Link href="/">
                    <ul>{links.name}</ul>
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <div className="companyWrapper p-1.5 ">
            <h2 className="text-[15px] font-semibold font-display text-white">
              Company
            </h2>
            <div className=" flex flex-col gap-1 text-[#9B968E] list-none ">
              {companyLinks.map((links) => (
                <li key={links.id}>
                  <Link href="/">
                    <ul>{links.name}</ul>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="w-full border-[#9B968E]" />
    <div className="bottomWrapperContainer  flex items-center justify-between px-3.5 py-3 ">
       <div>
        <p className="text-[12px] text-[#9B968E] font-body font-bold flex items-center gap-1"> <Copyright size="14px"/> 2026 Nexroa, All rights reserved</p>
       </div>
       <div className="text-[12px] font-body font-semibold text-[#9B968E] flex items-center gap-2.5">
        <Link href="/">Privacy</Link>
        <Link href="/">Terms</Link>
        <Link href="/">Cookies</Link>
       </div>
       <div className="border border-white text-[#9B968E]">
          <div className="languageSelectorBox">
            <p>India</p>
          </div>
          <div className="paymentGateways">

          </div>
        </div>       
    </div>
    </>
  );
}

"use client";
import "@ant-design/v5-patch-for-react-19";
import ChildrenInterface from "@/interfaces/childrenInterface";
import React, { FC } from "react";
import Navbar from "./shared/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import RightSidebarButton from "./shared/RightSidebarButton";
import LeftSidebar from "./shared/LeftSidebar";
import Footer from "./Footer";
import ScrollBottomtoTop from "./shared/ScrollBottomtoTop";
import Image from "next/image";
import CustomButton from "./shared/CustomButton";

const MainLayout: FC<ChildrenInterface> = ({ children }) => {
  return (
    <AntdRegistry>
      <div className="min-h-screen flex flex-col font-rubik">
        {/* Hero section */}
        <Navbar />

        {/* Main section */}
        <main className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_0.75fr] text-2xl mx-[20px]  lg:pt-[50px] md:px-[20px] lg:px-[150px] mb-[10px] ">
          {/* left aside */}
          <aside
            className="sticky lg:top-[30px] md:flex md:flex-row md:w-full md:h-[500px] md:mx-auto md:p-[30px] bg-white border-2 border-gray-300 px-[15px] py-[20px] -mt-20 md:-mt-65 space-y-10 md:space-x-4 text-start md:text-center rounded-lg"
          >
            {/* Profile Image */}
              <div className="relative h-[434px] md:h-full w-full md:flex-1">
              {/* Profile Image */}
                <Image
                  fill
                  className="rounded-lg object-cover"
                  alt="profile"
                  src="/images/profile.png"
                />
              </div>

            {/* other information */}
              <div className="space-y-4 md:flex-1">
            {/* Name & Role */}
              <div className="space-y-2 px-5">
                <p className="text-2xl font-bold font-rubik">Nausheen Siddiqui</p>
                <p className="text-lg text-gray-800 font-rubik">
                  Software Engineer
                </p>
              </div>
            {/* Contact Info */}
              <div className="bg-zinc-100 rounded-lg md:px-1 py-4 px-5 font-rubik text-gray-800 tracking-wide text-base">
                <p>
                  Phone:{" "}
                  <span className="hover:text-rose-400 hover:underline">
                    +01234567890
                  </span>
                </p>
                <p>Email: siddiqui.techsunset@gmail.com</p>
              </div>
            {/* Button */}
              <div>
                <CustomButton icon={<ArrowRightOutlined />} className="w-full">
                  Download My CV
                </CustomButton>
              </div>
            </div>
          </aside>


          <div className="shadow-lg rounded-lg my-[30px] p-10">
            {children}
          </div>

          <div className="">
            {/* right aside */}
            <aside className="sticky md:top-[30px]">
              <div className="border-2 border-gray-300 rounded-lg p-[10px] lg:p-[20px] flex flex-row lg:flex-col lg:gap-8 justify-start gap-4 lg:justify-between">
                <RightSidebarButton href="/about"> About </RightSidebarButton>
                <RightSidebarButton href="/resume"> Resume</RightSidebarButton>
                <RightSidebarButton href="/work"> Work </RightSidebarButton>
                <RightSidebarButton href="/contact-us">
                  {" "}
                  Contact{" "}
                </RightSidebarButton>
              </div>
            </aside>
          </div>

        </main>

        <Footer />
        <ScrollBottomtoTop />
      </div>
    </AntdRegistry>
  );
};

export default MainLayout;

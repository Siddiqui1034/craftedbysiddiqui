"use client";
import '@ant-design/v5-patch-for-react-19';
import ChildrenInterface from "@/interfaces/childrenInterface";
import React, { FC } from "react";
import Navbar from "./shared/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { WhatsAppOutlined } from "@ant-design/icons";
import RightSidebarButton from './shared/RightSidebarButton';
import LeftSidebar from './shared/LeftSidebar';
import Footer from './Footer';
import ScrollBottomtoTop from './shared/ScrollBottomtoTop';

const MainLayout: FC<ChildrenInterface> = ({ children }) => {

  return (
    <AntdRegistry>
      <div className="min-h-screen flex flex-col font-rubik">
        {/* Hero section */}
        <Navbar />

        {/* Main section */}
        <main className="md:pt-[50px] md:px-[150px] mb-[10px] ">
          <div className="grid grid-cols-[1fr_3fr_0.75fr] text-2xl ">
            <div>
              {/* left aside */}
              <aside className="-mt-65 sticky top-[30px]">
                <div className="bg-white border-2 border-gray-300 rounded-lg w-full md:w-[300px] md:mx-auto">
                  <LeftSidebar />
                </div>
              </aside>
            </div>

            <div className="shadow-lg rounded-lg my-[30px] mx-[25px] p-10">
              {children}
            </div>

            <div className="">
              {/* right aside */}
              <aside className="sticky top-[30px]">
                <div className="border-2 border-gray-300 rounded-lg p-[20px] flex flex-col gap-8 justify-between">
                  <RightSidebarButton href="/about"> About </RightSidebarButton>
                  <RightSidebarButton href="/resume"> Resume</RightSidebarButton>
                  <RightSidebarButton href="/work"> Work </RightSidebarButton>
                  <RightSidebarButton href="/contact-us"> Contact </RightSidebarButton>                 
                </div>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
        <ScrollBottomtoTop />

      </div>


    </AntdRegistry>
  );
};

export default MainLayout;

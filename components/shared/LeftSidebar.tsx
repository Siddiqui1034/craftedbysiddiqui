import { Card } from "antd";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowRightOutlined } from "@ant-design/icons";

const LeftSidebar = () => {
  return (
    <Card
      className="!border-none !shadow-none !py-[20px] !px-[15px]"
      cover={
        <div className="space-y-8">
            {/* Profile Pic */}
            <div className="mb-[20px] ">
            <Image
                width={400}
                height={300}
                className="rounded-lg"
                alt="example"
                src="/images/profile.png"
            />
            </div>

            {/* Name and Position Block */}
            <div className="space-y-2 text-center">
                <p className="text-3xl font-bold font-rubik">Nausheen Siddiqui</p>
                <p className="text-lg text-gray-800 font-rubik">
                Software Engineer
                </p>
            </div>

            {/* Contact Block */}
            <div className="w-full h-[124px] p-4 bg-zinc-100 rounded-lg flex flex-col items-center justify-center tracking-wider font-rubik text-center text-gray-800 text-base">
                <p className="">Phone:{" "} <span className="hover:text-rose-400 hover:underline">+01234567890</span></p>
                <p className="">Email: siddiqui.techsunset@gmail.com</p>
            </div>

            {/* Download Button */}
            <div className="">
                <CustomButton icon={<ArrowRightOutlined />}>
                    Download My CV
                </CustomButton>
            </div>

        </div>
      }
    >
        
    </Card>
  );
};

export default LeftSidebar;

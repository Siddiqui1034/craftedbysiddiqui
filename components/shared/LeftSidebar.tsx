import { Card } from "antd";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowRightOutlined } from "@ant-design/icons";

const LeftSidebar = () => {
  return (
   <Card
  className="!border-none !shadow-none p-0 w-full max-w-[300px] mx-auto"
  bodyStyle={{ padding: "0px" }}
>
  <div className="p-[15px] w-full space-y-6 text-center">
    {/* Profile Image */}
    <div>
      <Image
        width={290}
        height={290}
        className="rounded-lg mx-auto"
        alt="profile"
        src="/images/profile.png"
      />
    </div>

    {/* Name & Role */}
    <div className="space-y-2">
      <p className="text-2xl font-bold font-rubik">Nausheen Siddiqui</p>
      <p className="text-lg text-gray-800 font-rubik">Software Engineer</p>
    </div>

    {/* Contact Info */}
    <div className="bg-zinc-100 rounded-lg px-1 py-4 font-rubik text-gray-800 tracking-wider text-base">
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
</Card>

  );
};

export default LeftSidebar;

// Image in ant design card

/* <Card
      hoverable
      cover = {
        <div className="relative w-full h-[180px]">
            <Image 
              src="" 
              layout="fill" 
              alt=""
              objectFit='cover'
            />
        </div>
      }
    >
      <Card.Meta 
        title="Men's Blue Jeans
        description = {
          <div>
            <label>$2000</label>
            <label>$2000</label>
            <label>$2000</label>
          </div>
        }" />
*/



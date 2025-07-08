import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowRightOutlined } from "@ant-design/icons";

const LeftSidebar = () => {
  return (
    <aside
            className="sticky xl:top-[30px] flex flex-col md:flex-row lg:flex-col lg:items-center md:gap-4 md:items-stretch 
            lg:justify-center  md:justify-around md:h-[450px] lg:h-[650px] xl:h-[650px] md:w-full  bg-white border-2 border-gray-300 px-[15px] py-[20px] 
           -mt-35 lg:-mt-0 xl:-mt-50 space-y-10 md:space-y-6 lg:space-y-4 text-start lg:text-center rounded-lg"
          >
            <div className="relative w-full md:w-1/2 xl:w-full lg:flex lg:flex-col lg:justify-center xl:flex-1 h-[434px] md:h-full" >
            {/* Profile Image */}
              <Image
                fill
                className="rounded-lg object-cover"
                alt="profile"
                src="/images/profile.png"
              />
            </div>
            <div className="space-y-4 lg:flex-1 xl:flex-1 md:flex md:flex-col md:justify-center md:gap-10 lg:gap-2">
            {/* Name & Role */}
            <div className="space-y-2">
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
              <CustomButton href="/files/Nausheen Siddiqui_cv.pdf" download={true} icon={<ArrowRightOutlined />} 
              className="w-full">
                Download My CV
              </CustomButton>
            </div>
            </div>
          </aside>
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

import React from "react";
import Title from "./shared/Title";
import MainTitle from "./shared/MainTitle";
import SubTitle from "./shared/SubTitle";
import CustomCard from "./shared/CustomCard";
import { Card } from "antd";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="mb-[50px] space-y-8">
      <Title title="Education" />

      <section className="space-y-4">
        <MainTitle>Elevate your brand with a the</MainTitle>
        <SubTitle>
          ished fact that a reader will be distrol acted bioiiy desig ished fact
          that a reader will acted ished fact that a reader will be distrol
          acted
        </SubTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-8">
          <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
            <div className="flex flex-col items-start gap-2">
              <h6 className="text-lg font-medium mt-1 text-style font-rubik">
                Trainer Marketing
              </h6>
              <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
                2005-2009
              </h3>
            </div>
            <p className="text-lg font-medium mt-1 text-style">
             A personal portfolio is a curated collection of 
             an individual's professional work, showcasing their 
             skills, experience A personal portfolio.
            </p>
          </Card>
          <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
            <div className="flex flex-col items-start gap-2">
              <h6 className="text-lg font-medium mt-1 text-style font-rubik">
                Trainer Marketing
              </h6>
              <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
                2005-2009
              </h3>
            </div>
            <p className="text-lg font-medium mt-1 text-style">
             A personal portfolio is a curated collection of 
             an individual's professional work, showcasing their 
             skills, experience A personal portfolio.
            </p>
          </Card>
          <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
            <div className="flex flex-col items-start gap-2">
              <h6 className="text-lg font-medium mt-1 text-style font-rubik">
                Trainer Marketing
              </h6>
              <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
                2005-2009
              </h3>
            </div>
            <p className="text-lg font-medium mt-1 text-style">
             A personal portfolio is a curated collection of 
             an individual's professional work, showcasing their 
             skills, experience A personal portfolio.
            </p>
          </Card>
          <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
            <div className="flex flex-col items-start gap-2">
              <h6 className="text-lg font-medium mt-1 text-style font-rubik">
                Trainer Marketing
              </h6>
              <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
                2005-2009
              </h3>
            </div>
            <p className="text-lg font-medium mt-1 text-style">
             A personal portfolio is a curated collection of 
             an individual's professional work, showcasing their 
             skills, experience A personal portfolio.
            </p>
          </Card>
        </div>

        {/* Experience */}
        <div className="my-20">
          <Title title="Experience" />
          <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-8">
            <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
              <div className="flex flex-col items-start gap-2">
                <h6 className="text-lg font-medium mt-1 text-style font-rubik">
                  Trainer Marketing
                </h6>
                <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
                  2005-2009
                </h3>
              </div>
              <p className="text-lg font-medium mt-1 text-style">
              A personal portfolio is a curated collection of 
              an individual's professional work, showcasing their 
              skills, experience A personal portfolio.
              </p>
            </Card>
            <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
              <div className="flex flex-col items-start gap-2">
                <h6 className="text-lg font-medium mt-1 text-style font-rubik">
                  Trainer Marketing
                </h6>
                <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
                  2005-2009
                </h3>
              </div>
              <p className="text-lg font-medium mt-1 text-style">
              A personal portfolio is a curated collection of 
              an individual's professional work, showcasing their 
              skills, experience A personal portfolio.
              </p>
            </Card>
            <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
              <div className="flex flex-col items-start gap-2">
                <h6 className="text-lg font-medium mt-1 text-style font-rubik">
                  Trainer Marketing
                </h6>
                <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
                  2005-2009
                </h3>
              </div>
              <p className="text-lg font-medium mt-1 text-style">
              A personal portfolio is a curated collection of 
              an individual's professional work, showcasing their 
              skills, experience A personal portfolio.
              </p>
            </Card>
            <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
              <div className="flex flex-col items-start gap-2">
                <h6 className="text-lg font-medium mt-1 text-style font-rubik">
                  Trainer Marketing
                </h6>
                <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
                  2005-2009
                </h3>
              </div>
              <p className="text-lg font-medium mt-1 text-style">
              A personal portfolio is a curated collection of 
              an individual's professional work, showcasing their 
              skills, experience A personal portfolio.
              </p>
            </Card>
          </div>
        </div>

        {/*  Skills */}
        <div className="grid grid-col-1 md:grid-cols-2 gap-4 items-center justify-between my-20 text-base">
          <div className="">            
            <Title title="Design Skills" className="mb-10">
              <div className="flex flex-col gap-4 mb-5 md:grid-cols-2">
                <div className="flex justify-between items-center">
                  <p >Photoshop</p>
                  <p>80%</p>
                </div>
                <div className="w-full rounded-lg bg-gray-300 h-[8px]">
                  <div className="w-[80%] m-[1px] rounded-lg bg-rose-600 h-[7px]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-5 md:grid-cols-2">
                <div className="flex justify-between items-center">
                  <p>Photoshop</p>
                  <p>60%</p>
                </div>
                <div className="w-full rounded-lg bg-gray-300 h-[8px]">
                  <div className="w-[60%] m-[1px] rounded-lg bg-rose-600 h-[7px]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-5 md:grid-cols-2">
                <div className="flex justify-between items-center">
                  <p>Photoshop</p>
                  <p>95%</p>
                </div>
                <div className="w-full rounded-lg bg-gray-300 h-[8px]">
                  <div className="w-[95%] m-[1px] rounded-lg bg-rose-600 h-[7px]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-5 md:grid-cols-2">
                <div className="flex justify-between items-center">
                  <p>Photoshop</p>
                  <p>95%</p>
                </div>
                <div className="w-full rounded-lg bg-gray-300 h-[8px]">
                  <div className="w-[95%] m-[1px] rounded-lg bg-rose-600 h-[7px]"></div>
                </div>
              </div>
            </Title>
          </div>

            <div className="">            
            <Title title="Development Skills" className="mb-10">
               <div className="flex flex-col gap-4 mb-5 md:grid-cols-2">
                <div className="flex justify-between items-center">
                  <p>Photoshop</p>
                  <p>95%</p>
                </div>
                <div className="w-full rounded-lg bg-gray-300 h-[8px]">
                  <div className="w-[95%] m-[1px] rounded-lg bg-rose-600 h-[7px]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-5 md:grid-cols-2">
                <div className="flex justify-between items-center">
                  <p >Photoshop</p>
                  <p>80%</p>
                </div>
                <div className="w-full rounded-lg bg-gray-300 h-[8px]">
                  <div className="w-[80%] m-[1px] rounded-lg bg-rose-600 h-[7px]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4   mb-5 md:grid-cols-2">
                <div className="flex justify-between items-center">
                  <p>Photoshop</p>
                  <p>60%</p>
                </div>
                <div className="w-full rounded-lg bg-gray-300 h-[8px]">
                  <div className="w-[60%] m-[1px] rounded-lg bg-rose-600 h-[7px]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4   mb-5 md:grid-cols-2">
                <div className="flex justify-between items-center">
                  <p>Photoshop</p>
                  <p>95%</p>
                </div>
                <div className="w-full rounded-lg bg-gray-300 h-[8px]">
                  <div className="w-[95%] m-[1px] rounded-lg bg-rose-600 h-[7px]"></div>
                </div>
              </div>
            </Title>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Resume;

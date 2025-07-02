import React from "react";

import Title from "./shared/Title";
import { Card } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import CustomCard from "./shared/CustomCard";
import MainTitle from "./shared/MainTitle";
import SubTitle from "./shared/SubTitle";

const About = () => {
  return (
    <div className="space-y-4">

      <div className="space-y-6">
        <Title title="About Me" />
        <MainTitle>
          Boost Business Strategic
          <br />Solutions with Us
        </MainTitle>
      
       <SubTitle>
        Hello! I'm Fatima,
        a passionate your profession, e.g., Web Developer, 
        Graphic Designer, Data Analyst based in Dhaka.
        With a strong focus on creativity, innovation, 
        and a commitment to continuous learning, 
        I bring a unique blend of technical skills 
        and artistic vision to each project I undertake.
       </SubTitle>
      </div>

      <section className="space-y-8">
        <h1 className="font-bold text-2xl font-rubik capitalize">What I do?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>

        <div className="grid grid-cols-4 gap-8 py-[34px] px-[7px]">
          
          <div className="flex flex-col space-y-5 bg-zinc-100 py-[34px] px-[7px] rounded-lg text-center ">
            <h1 className="font-bold text-[40px] leading-[1.1em] font-helvetica">20k</h1>
            <p className="text-style">Our Project Complete</p>
          </div>
          <div className="flex flex-col bg-zinc-100 py-[34px] px-[7px] rounded-lg  ">
            <h1>10k</h1>
            <p>Our Natural Products</p>
          </div>
          <div className="flex flex-col bg-zinc-100 py-[34px] px-[7px] rounded-lg  ">
            <h1>200+</h1>
            <p>Clients Reviews</p>
          </div>
          <div className="flex flex-col bg-zinc-100 py-[34px] px-[7px] rounded-lg ">
            <h1>2k+</h1>
            <p>Our Satisfied Clientd</p>
          </div>
        </div>
      </section>

      <div>

      </div>
    </div>
  );
};

export default About;

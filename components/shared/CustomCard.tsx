import React from "react";
import { Avatar, Card } from "antd";
import Image from "next/image";
import { CodeOutlined } from "@ant-design/icons";

const { Meta } = Card;

const CustomCard: React.FC = () => (
  <>
    <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 !p-4 shadow-md">
      <div className="flex items-center gap-4">
        <div className="bg-rose-500 text-white w-[50px] h-[50px] rounded-full text-xl flex items-center justify-center">
          <CodeOutlined />
        </div>
        <h3 className="text-2xl font-bold text-black font-rajdhani leading-7">
          Ui/Ux Design
        </h3>
      </div>
      <p className="text-lg font-medium mt-1 text-style">
        Each one showcases my approach and dedication to detail, creativity.
      </p>
    </Card>
  </>
);

export default CustomCard;

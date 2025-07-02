// import React from "react";
// import Title from "./shared/Title";
// import MainTitle from "./shared/MainTitle";
// import SubTitle from "./shared/SubTitle";
// import { Card } from "antd";
// import Image from "next/image";

// const Work = () => {
//   return (
//     <div className="space-y-4">
//       <div className="mb-[50px] space-y-6">
//         <Title title="My Completed Work " />
//         <MainTitle>Elevate your brand with a the</MainTitle>

//         <SubTitle>
//           ished fact that a reader will be distrol acted bioiiy desig ished fact
//           that a reader will acted ished fact that a reader will be distrol
//           acted
//         </SubTitle>
//       </div>

//       <section className="space-y-8"></section>
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-8">
//             <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
//               <Image className="w-full cover rounded-lg" width={100} height={100} alt="glass image" src="/images/tab-image-1.png" />
//             </Card>
//             <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
//               <Image className="w-full cover rounded-lg" width={100} height={100} alt="glass image" src="/images/tab-image-2.png" />
//             </Card>
//             <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
//               <Image className="w-full cover rounded-lg" width={100} height={100} alt="glass image" src="/images/tab-image-3.png" />
//             </Card>
//             <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
//               <Image className="w-full cover rounded-lg" width={100} height={100} alt="glass image" src="/images/tab-image-4.png" />
//             </Card>
//             <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
//               <Image className="w-full cover rounded-lg" width={100} height={100} alt="glass image" src="/images/tab-image-5.png" />
//             </Card>
//             <Card className="rounded-2xl border-b-[4px] !bg-zinc-100 shadow-md">
//               <Image className="w-full cover rounded-lg" width={100} height={100} alt="glass image" src="/images/tab-image-6.png" />
//             </Card>
//           </div> */}


//       <div></div>
//     </div>
//   );
// };

// export default Work;

import Image from "next/image";
// import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { ArrowRightOutlined } from "@ant-design/icons";

const PortfolioCard = () => {
  return (
    <div className="relative w-[300px] h-[350px] rounded-2xl overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <Image
        src="/images/tab-image-4.png"
        alt="Portfolio"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-pink-600/60 to-pink-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Text & Icon Overlay */}
      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition duration-300 text-white">
        <p className="text-sm font-medium">Development</p>
        <p className="text-xl font-bold text-pink-400">My Portfolio<br />of Innovation</p>
      </div>

      {/* Icon Box on Top Right */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="w-10 h-10 flex items-center justify-center border border-white rounded-md">
          <ArrowRightOutlined className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

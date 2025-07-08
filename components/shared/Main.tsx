// import { ArrowRightOutlined } from '@ant-design/icons'
// import { Button, Card } from 'antd'
// import Image from 'next/image'
// import React from 'react'

// const Main = ({children}) => {
//   return (
//      <main className="">
//           <div className="grid grid-cols-[1fr_2fr_1fr] bg-amber-50 text-2xl ">
//             <div className="bg-amber-500">
//               <aside className="relative left-40 -top-50">
//                 <div className="w-[283px] h-[656px] bg-white border-2 border-gray-300 rounded-lg p-[15px]">
//                   <Card
//                     hoverable
//                     cover={
//                       <div>
//                         <div className="mb-[10px]">
//                           <Image
//                             width={253}
//                             height={258}
//                             className="rounded-lg"
//                             alt="example"
//                             src="/images/profile.png"
//                           />
//                         </div>
//                         {/* Title and Description Block */}
//                         <div className="">
//                           <p className="text-3xl text-black text-center font-bold">
//                             John Lee
//                           </p>
//                           <p className="text-lg text-gray-500 text-center font-semibold">
//                             Chief Executive Officer
//                           </p>
//                         </div>

//                         <div className="w-full h-[124px] bg-zinc-200 rounded-lg">
//                           <p className="text">
//                             Phone:{" "}
//                             <span className="hover:text-rose-400 hover:underline">
//                               +01234567890
//                             </span>
//                           </p>
//                           <p>Email: admin@example.com</p>
//                         </div>
//                         <div>
//                           <Button type="primary" danger icon={<ArrowRightOutlined />} iconPosition="end">Download My DV</Button>
//                         </div>
//                       </div>
//                     }
//                   ></Card>
//                 </div>
//               </aside>
//             </div>

//             <div className="text-black bg-amber-200 h-[3000px]">{children}</div>
//             <div className="bg-amber-500">
//               <aside>Right Aside</aside>
//             </div>
//           </div>
//         </main>
//   )
// }

// export default Main

{
  /* Main section */
}
<main className="grid grid-cols-1 lg:grid-cols-[1fr] xl:grid-cols-[1fr_4fr_0.75fr] text-2xl max-md:mx-20 md:mx-0 xl:pt-[50px] lg:px-[150px] mb-[10px] ">
  {/* left aside */}
  <aside
    className="sticky xl:top-[30px] flex flex-col md:flex-row lg:flex-col lg:items-center md:gap-4 md:items-stretch 
            lg:justify-center  md:justify-around md:h-[450px] lg:h-[650px] xl:h-[650px] md:w-full  bg-white border-2 border-gray-300 px-[15px] py-[20px] 
           -mt-35 lg:-mt-0 xl:-mt-50 space-y-10 md:space-y-6 lg:space-y-4 text-start lg:text-center rounded-lg"
  >
    <div className="relative w-full md:w-1/2 xl:w-full lg:flex lg:flex-col lg:justify-center xl:flex-1 h-[434px] md:h-full">
      {/* Profile Image */}
      <Image
        fill
        className="rounded-lg object-cover"
        alt="profile"
        src="/images/profile.png"
      />
    </div>
    <div className="space-y-4 px-4 lg:flex-1 xl:flex-1 md:flex md:flex-col md:justify-center md:gap-10 lg:gap-2">
      {/* Name & Role */}
      <div className="space-y-2">
        <p className="text-2xl font-bold font-rubik">Nausheen Siddiqui</p>
        <p className="text-lg text-gray-800 font-rubik">Software Engineer</p>
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
        <CustomButton
          href="/files/Nausheen Siddiqui_cv.pdf"
          download={true}
          icon={<ArrowRightOutlined />}
          className="w-full"
        >
          Download My CV
        </CustomButton>
      </div>
    </div>
  </aside>

  <div className="shadow-lg rounded-lg my-[30px] xl:mx-[20px] p-10">
    {children}
  </div>

  <div className="">
    <RightSidebarButton />
  </div>
</main>;

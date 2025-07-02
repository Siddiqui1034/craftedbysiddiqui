import React, { FC, ReactNode } from "react";
interface MainTitleInterface{
    children: ReactNode
}

const MainTitle:FC<MainTitleInterface> = ({children}) => {
  return (
    <h2 className="text-5xl font-black leading-15 font-rajdhani">
      {children}
    </h2>
  );
};

export default MainTitle;

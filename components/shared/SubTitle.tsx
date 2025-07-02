import React, { FC, ReactNode } from "react";
interface SubTitleInterface{
    children: ReactNode
}

const SubTitle:FC<SubTitleInterface>  = ({children}) => {
  return (
    <p
      className="text-base font-normal leading-7"
      style={{ color: "#5d6570" }}
    >
      {children}
    </p>
  );
};

export default SubTitle;

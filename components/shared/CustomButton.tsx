import { Button } from "antd";
import { FC, ReactNode } from "react";

interface CustomButtonInterface{
    children: ReactNode
    icon: ReactNode  
    className?: string  
    htmlType?: 'submit' | 'button' | 'reset'
}

const CustomButton:FC<CustomButtonInterface> = ({htmlType= 'submit' , children, icon, className}) => {
  return (
    <Button
      htmlType={htmlType}
      className={`!w-full !p-6 !text-base !font-medium !rounded-full  ${className || ''}`}
      type="primary"
      danger
      icon={icon}
      iconPosition="end"
    >
     {children}
    </Button>
  );
};

export default CustomButton;

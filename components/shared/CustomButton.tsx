import { Button } from "antd";
import { FC, ReactNode } from "react";

interface CustomButtonInterface {
  children: ReactNode;
  href?: string;
  download?: boolean;
  icon?: ReactNode;
  className?: string;
  htmlType?: "submit" | "button" | "reset";
}

const CustomButton: FC<CustomButtonInterface> = ({
  htmlType = "submit",
  children,
  href,
  download,
  icon,
  className,
}) => {
  return href ? (
    <a
      href={href}
      download={download}
      className={`!w-full !p-4 !text-base !font-medium !rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center gap-2 transition-all duration-200 ${className}`}
    >
      {children} {icon}
    </a>
  ) : (
    <Button
      htmlType={htmlType}
      className={`!w-full !p-6 !text-base !font-medium !rounded-full  ${
        className || ""
      }`}
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

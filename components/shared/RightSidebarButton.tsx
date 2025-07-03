import { Button } from 'antd';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface RightSidebarButtonInterface{
    href: string
    children?: ReactNode
}

const RightSidebarButton: FC<RightSidebarButtonInterface> = ({ href, children }) => {
  return (
    <Link href={href}>
      <Button
        className="!px-[20px] !h-[40px] md:!px-[40px] md:!h-[80px] !font-rubik !font-normal !text-lg"
        type="primary"
        danger
        block
      >
        {children}
      </Button>
    </Link>
  );
}

export default RightSidebarButton

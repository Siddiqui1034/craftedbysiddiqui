"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const RightSidebar = () => {
  const pathName = usePathname()
  console.log(pathName)

  const links = [
    {label: "About", href: '/about'},
    {label: "Resume", href: '/resume'},
    {label: "Work", href: '/work'},
    {label: "Contact", href: '/contact-us'}
  ]

  return (
    <aside className="sticky lg:top-[30px]">
        <div className="border-2 border-gray-300 rounded-lg p-[20px] flex gap-4 xl:flex-col xl:gap-6 xl:justify-between">
         {
          links.map((link)=>(
            <Link href={link.href} key={`link_${link.href}`}>
              <button             
              className={`!font-rubik !font-normal !text-lg 
              lg:!w-full 
              lg:p-[30px] 
              p-[15px]              
              !rounded-lg 
              flex items-center justify-center
              ${pathName === link.href 
                ? '!bg-red-600 !text-white' 
                : '!bg-gray-200 !text-black hover:!bg-red-600 hover:!text-white'}
            `}
              >
                
                {link.label}
              </button>
            </Link>
          ))
         }
        </div>

    </aside>
  );
}

export default RightSidebar

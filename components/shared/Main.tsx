import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import Image from 'next/image'
import React from 'react'

const Main = ({children}) => {
  return (
     <main className="">
          <div className="grid grid-cols-[1fr_2fr_1fr] bg-amber-50 text-2xl ">
            <div className="bg-amber-500">
              <aside className="relative left-40 -top-50">
                <div className="w-[283px] h-[656px] bg-white border-2 border-gray-300 rounded-lg p-[15px]">
                  <Card
                    hoverable
                    cover={
                      <div>
                        <div className="mb-[10px]">
                          <Image
                            width={253}
                            height={258}
                            className="rounded-lg"
                            alt="example"
                            src="/images/profile.png"
                          />
                        </div>
                        {/* Title and Description Block */}
                        <div className="">
                          <p className="text-3xl text-black text-center font-bold">
                            John Lee
                          </p>
                          <p className="text-lg text-gray-500 text-center font-semibold">
                            Chief Executive Officer
                          </p>
                        </div>

                        <div className="w-full h-[124px] bg-zinc-200 rounded-lg">
                          <p className="text">
                            Phone:{" "}
                            <span className="hover:text-rose-400 hover:underline">
                              +01234567890
                            </span>
                          </p>
                          <p>Email: admin@example.com</p>
                        </div>
                        <div>
                          <Button type="primary" danger icon={<ArrowRightOutlined />} iconPosition="end">Download My DV</Button>
                        </div>
                      </div>
                    }
                  ></Card>
                </div>
              </aside>
            </div>

            <div className="text-black bg-amber-200 h-[3000px]">{children}</div>
            <div className="bg-amber-500">
              <aside>Right Aside</aside>
            </div>
          </div>
        </main>
  )
}

export default Main

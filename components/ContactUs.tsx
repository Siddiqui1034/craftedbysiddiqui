"use client";
import React, { useState } from "react";
import Title from "./shared/Title";
import MainTitle from "./shared/MainTitle";
import SubTitle from "./shared/SubTitle";
import { Form, Input, message } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import CustomButton from "./shared/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const contactUs = (values: any) => {
    console.log(values);
    setLoading(true);

    setTimeout(() => {
      console.log("message sent successfully", values);
      message.success("Your message sent ");
      setLoading(false);
    }, 500);
  };
  return (
    <div className="mb-[50px] space-y-8">
      <Title title="Get in touch" />

      <section className="space-y-4">
        <MainTitle>Elevate your brand with a the</MainTitle>
        <SubTitle>
          ished fact that a reader will be distrol acted bioiiy desig ished fact
          that a reader will acted ished fact that a reader will be distrol
          acted
        </SubTitle>
      </section>

      <div className="mt-[50px]">
        <Form onFinish={contactUs}>
          <div className="grid grid-cols-2 gap-4 ">
            <Form.Item name="fullname">
              <Input placeholder="Your Name" size="large" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true }]}>
              <Input placeholder="Your Email" size="large" />
            </Form.Item>
            <Form.Item name="mobile" rules={[{ required: true }]}>
              <Input placeholder="Phone Number" size="large" />
            </Form.Item>
            <Form.Item name="subject" rules={[{ required: true }]}>
              <Input placeholder="Subject" size="large" />
            </Form.Item>

            <Form.Item
              name="message"
              className="!col-span-2"
              rules={[
                { required: true },
                { max: 1000, message: "Maximum 1000" },
              ]}
            >
              <Input.TextArea
                rows={5}
                maxLength={100}
                size="large"
                placeholder="Your Message"
              />
            </Form.Item>

            <CustomButton
              htmlType="submit"
              className="col-span-2"
              icon={
                loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  <ArrowRightOutlined />
                )
              }
            >
              {loading ? "Sending msg..." : "Connect Now"}
            </CustomButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;

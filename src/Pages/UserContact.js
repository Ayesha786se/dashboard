
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";

import React from "react";

function UserContact() {
  return (
    <>
      <div style={{ margin: "0 auto" }}>
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(formdata) => {
            console.log(formdata);
          }}
          onFinishFailed={(error) => {
            console.log(error);
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Your Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: " enter your valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Your Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password "
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter Password" />
          </Form.Item>
          {/* note confirm pasword validator
             we use validator function which give a prop named getFeildValue(give value of password input (userpassword)) 
             validator fun used to compare both passwords (_,value) _ =rules of password , value=confirmpassword current value
           */}
          <Form.Item
            name="Confirm Password"
            label=" Confirm Password "
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Match Both Password Correctly");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm Your Password" />
          </Form.Item>

          <Form.Item name="dob" label=" Date of Birth ">
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Choose Date of Birth"
            />
          </Form.Item>

          <Form.Item name="gender" label="Gender " requiredMark="optional">
            <Select placeholder="Enter Your Gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="website"
            label="Website "
            rules={[{ type: "url", message: "Please enter valid URL" }]}
            hasFeedback
          >
            <Input placeholder="Enter Website URL" />
          </Form.Item>
          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              { type: true },
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To continue Accept our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              Agree to our <a href="#">Terms & Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Cloud-Dusk
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default UserContact;

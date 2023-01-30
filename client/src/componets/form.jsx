import React from "react";
import Navbar from "./navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input } from "antd";

const Forms = (props) => {
  const { Firstname, Number, Email, handleChange, handleSubmit } = props;
  return (
    <div>
      <Navbar />
      <br />
      <div className="form">
        <form
          name="basic"
          initialValues={{ remember: true }}
          onSubmit={handleSubmit}
          className="forms"
        >
          <label> Phone Book Form </label>

          <Form.Item
            // label="Name"
            name="name"
            placeholder="Enter Your Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
             label="Name" Name
          >
            <Input
              label="Name"
              type="text"
              onChange={handleChange}
              name="Firstname"
              value={Firstname}
              placeholder="Your Name"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            placeholder="Enter Your Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              type="email"
              onChange={handleChange}
              name="Email"
              value={Email}
              placeholder="Your Email"
            />
          </Form.Item>

          <Form.Item
            label="Contact"
            name="number"
            placeholder="Enter Your Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              type="number"
              onChange={handleChange}
              name="Number"
              value={Number}
              placeholder="0784562899"
            />
          </Form.Item>

          <button type="submit" className="butt">
            Save
          </button><button type="submit" className="CancelButton">
            Cancel
          </button>

        </form>
      </div>
    </div>
  );
};

export default Forms;

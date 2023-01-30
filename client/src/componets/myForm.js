import React from "react";
// import Navbar from "./navBar";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
//Star Rating and other modules
import { Form, Input } from "antd";
// import "antd/dist/antd.css";
function Forms  (props)  {
  
  const { Firstname, Number, Email, handleChange, handleSubmit } = props;

  return (
   <div className="forms">
    <Form
      onSubmit={handleSubmit}
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Name"
        name="Firstname"
        
         
        rules={[
          {
            type: "name",
            message: "The input is Empty!",
          },
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
         <br />
         <Input
          type="text"
          onChange={handleChange}
          name="Firstname"
          value={Firstname}
          placeholder="Enter your Name"
        />
      </Form.Item>
      <Form.Item
        label="Email"
        
       
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
          <br />
          <Input
          type="email"
          onChange={handleChange}
          name="Email"
          value={Email}
          placeholder="Enter your Email"
        />
      </Form.Item>
      <Form.Item
        label="Contact"
        
        
        onChange={handleChange}
        rules={[
          {
            type: "Number",
            message: "The input is Empty",
          },
          {
            required: true,
            message: "Please input contact number!",
          },
        ]}
      >
          <br />
          <Input
          type="number"
          onChange={handleChange}
          name="Number"
          value={Number}
          placeholder="Enter Contact Number"
        />
      </Form.Item>

      <button type="submit" className="butt">
          Submit
        </button>
    </Form>
    </div>
  );
};
export default Forms;

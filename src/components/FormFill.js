import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { datas } from "../states/FormSlice";

function FormFill() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    address: "",
  });

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.Form.data);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    dispatch(datas(formData));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selector);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="m-3">
        <Col sm={8}>
          <FormGroup as={Row} sm={8} className="mt-3">
            <FormLabel htmlFor="username" sm={3}>
              Name
            </FormLabel>
            <Col sm={9}>
              <FormControl
                type="text"
                name="username"
                placeholder="enter full name"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} sm={8} className="mt-3">
            <FormLabel htmlFor="email" sm={3}>
              Email
            </FormLabel>
            <Col sm={9}>
              <FormControl
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} sm={8} className="mt-3">
            <FormLabel htmlFor="phone" sm={3}>
              Number
            </FormLabel>
            <Col sm={9}>
              <FormControl
                type="number"
                name="phone"
                placeholder="Enter number"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} sm={8} className="mt-3">
            <FormLabel htmlFor="address" sm={3}>
              Address
            </FormLabel>
            <Col sm={9}>
              <FormControl
                type="text"
                name="address"
                placeholder="Enter address"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
        </Col>
        <Col sm={8} className="mt-3 mx-auto">
          <Button type="submit" className="mx-auto">
            Submit
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default FormFill;

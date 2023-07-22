
import styled from "styled-components";
import { SubmitButton } from "../styled/Buttons";
import { Form } from "../styled/Forms";
import { H1, H3, H4 } from "../styled/Headings";
import {  InputWrapper } from "../styled/Wrappers";

const Textarea = styled.textarea`
  width: 70vw;
  height: 40vh;
  outline: none;
  border-radius: 18px;
  outline-color: black;
  color: black;
  border: 6px solid black;
  font-size: 16px;
`;

export const Signup = () => {
  const handleSubmit = () => {
    alert(
      "Tack för ditt meddelande! Vi återkommer till dig så fort som möjligt."
    );
  };
  return (
    <>
      <H1>Encanto</H1>
      <H4>Restaurant Reservation</H4>
      <H3>Login</H3>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Name</label>
          <input type="text" required />
          <label>Email</label>
          <input type="email" required />
          <label>Mobile</label>
          <input type="text" required />
          <label>Password</label>
          <input type="text" required />
        </InputWrapper>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
    </>
  );
};

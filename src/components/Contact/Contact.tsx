
import styled from "styled-components";
import { Link } from "react-router-dom";
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

export const Contact = () => {
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
          <label>User-Name</label>
          <input type="text" required />
         
          <label>Password</label>
          <input type="text" required />
          
          
        </InputWrapper>
        <SubmitButton type="submit">Sign In</SubmitButton>
        <H3>OR</H3>
        <Link to="/signup">
        <SubmitButton type="submit">Sign Up</SubmitButton>
        </Link>
      </Form>
    </>
  );
};

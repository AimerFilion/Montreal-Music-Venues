import styled from "styled-components";

const Form = ({ handleSuccess, handleSubscribe }) => {
  return (
    <>
      <form onSubmit={handleSuccess}>
        <Label for="name">Name:</Label>
        <Input name="name" type="text" required></Input>

        <Label for="email">Email:</Label>
        <Input name="email" type="email" required autoComplete="off"></Input>

        <Label for="message">What's up?</Label>
        <TextArea name="message" minLength="5" maxLength="200"></TextArea>

        <Label onClick={handleSubscribe} for="subscribe">
          Subscribe to our newsletter
        </Label>
        <input name="subscribe" type="checkbox"></input>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

const Input = styled.input`
  border: 2px solid #76ff03;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px;
  padding: 12px;
  width: 100%;

  &:focus {
    background-color: #76ff03;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const TextArea = styled.textarea`
  border: 2px solid #76ff03;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px;
  padding: 12px;
  width: 100%;

  &:focus {
    background-color: #76ff03;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Label = styled.label`
  font-weight: 600;
`;

const Button = styled.button`
  background: none;
  border: 2px solid #76ff03;
  color: black;
  cursor: pointer;
  float: right;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export default Form;

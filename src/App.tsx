import { ReactNode } from 'react';

import './style.css';

const Input = () => {
  return <input></input>;
};
const Form = ({ children }: { children?: ReactNode }) => {
  return <div>{children}</div>;
};

Form.Input = Input;

export const ParentApp = () => {
  return (
    <>
      <Form>
        <Form.Input></Form.Input>
      </Form>
    </>
  );
};

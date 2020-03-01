import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const SignInAndSignUp = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Your email here..." />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Your password here..." />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default SignInAndSignUp;

import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import bcrypt from 'bcryptjs';
import axios from 'axios';

const SignInAndSignUp = () => {
  // component state
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleSubmit = async evt => {
    // prevent reload
    evt.preventDefault();

    try {
      // build user object from component state
      const userObj = JSON.stringify({email, pw_hash: password, auth_level: 2});

      // axios call to log in
      let response = await axios.post('http://localhost:5000/user/signup', userObj);
      console.log(`response: ${response}`);

      // handle post response
      if (!response.error) {
        // TODO: call global 'signUp' action to update state/ui
        // signUp();
        console.log(`success response: ${response}`);

        // TODO: redirect to dashboard

        } else {
        // display error if request was successful but returned a failure
      }

    } catch (err) {
      console.log(`error: ${err}`);
      // catch error if request itself was unsuccessful
    }
  }

  const handlePw = pw => {
    // hash password
    let hashedPw = bcrypt.hashSync(pw, 4);
    console.log(hashedPw);

    // set state with hashed password
    setPassword(hashedPw);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" value={email} placeholder="Your email here..." onChange={evt => setEmail(evt.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Your password here..." onChange={evt => handlePw(evt.target.value)} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default SignInAndSignUp;

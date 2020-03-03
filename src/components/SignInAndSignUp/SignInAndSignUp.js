import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import bcrypt from "bcryptjs";
import axios from "axios";

// import global context
import { GlobalContext } from "../../context/GlobalState";

const SignInAndSignUp = props => {
  // component state
  let [signUpEmail, setSignUpEmail] = useState("");
  let [signUpPassword, setSignUpPassword] = useState("");
  let [signInEmail, setSignInEmail] = useState("");
  let [signInPassword, setSignInPassword] = useState("");

  // 'hook in' to global context
  const context = useContext(GlobalContext);
  // pull signInUser action off of global context
  const { signInUser } = context;

  const handleSignUpSubmit = async evt => {
    // prevent reload
    evt.preventDefault();

    try {
      // assign url and build user object from component state
      const userObj = {
        email: signUpEmail,
        pw_hash: signUpPassword,
        auth_level: 2
      };
      const url = "http://localhost:5000/user/signup";

      // axios call to signup
      let response = await axios.post(url, userObj);

      // handle post response
      if (!response.error) {
        // pull data from response
        const { email, auth_level } = response.data;

        // call global signInUser action to update state/ui
        const user = {
          email,
          auth_level,
          accessToken: "dummy_access_token",
          refreshToken: "dummy_refresh_token"
        };
        signInUser(user);

        props.history.push("/");

        // TODO: display error if request was successful but returned a failure
      } else {
        // console.log(`request successful but returned fail: ${response.error}`);
      }

      // TODO: display error if request itself was unsuccessful
    } catch (err) {
      // console.log(`error: ${err}`);
    }
  };

  const handleSignInSubmit = async evt => {
    // prevent reload
    evt.preventDefault();

    try {
      // assign url and build user object from component state
      const userObj = {
        email: signInEmail,
        pw_hash: signInPassword,
        auth_level: 2
      };
      const url = "http://localhost:5000/user/auth/signin";

      // axios call to sign in
      let response = await axios.post(url, userObj);

      // handle post response
      if (!response.error) {
        // TODO: call global 'signUp' action to update state/ui
        // signUp();
        console.log(`success response: ${response}`);

        // TODO: redirect to dashboard

        // display error if request was successful but returned a failure
      } else {
        console.log(`request successful but returned fail: ${response.error}`);
      }

      // catch error if request itself was unsuccessful
    } catch (err) {
      console.log(`error: ${err}`);
    }
  };

  return (
    <div>
      <Row form>
        <Col md={6}>
          <Form onSubmit={handleSignUpSubmit}>
            <h3 className="nowrap">Sign Up</h3>
            <FormGroup>
              <Label for="signUpEmail">Email</Label>
              <Input
                type="email"
                name="signUpEmail"
                id="signUpEmail"
                value={signUpEmail}
                placeholder="Your email here..."
                onChange={evt => setSignUpEmail(evt.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signUpPassword">Password</Label>
              <Input
                type="password"
                name="signUpPassword"
                id="signUpPassword"
                placeholder="Your password here..."
                onChange={evt =>
                  setSignUpPassword(bcrypt.hashSync(evt.target.value, 4))
                }
              />
            </FormGroup>
            <Button color="primary">Sign Up</Button>
          </Form>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSignInSubmit}>
            <h3 className="nowrap">Sign In</h3>
            <FormGroup>
              <Label for="signInEmail">Email</Label>
              <Input
                type="email"
                name="signInEmail"
                id="signInEmail"
                value={signInEmail}
                placeholder="Your email here..."
                onChange={evt => setSignInEmail(evt.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signInPassword">Password</Label>
              <Input
                type="password"
                name="signInPassword"
                id="signInPassword"
                placeholder="Your password here..."
                onChange={evt =>
                  setSignInPassword(bcrypt.hashSync(evt.target.value, 4))
                }
              />
            </FormGroup>
            <Button color="success">Sign In</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignInAndSignUp;

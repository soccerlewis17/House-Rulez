import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { useState } from "react";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { useNavigate } from "react-router-dom";
// Since we want to make a request as a user about a user
// we need to import the userService
import userService from "../../utils/userService";

function SignUpPage({handleSignUpOrLogin}) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [error, setError] = useState("");

  // initialize the useNavigate hook, which allows us to programatticaly change routes
  // aka after our signup call in our handleSubmit
  // navigate is a function that accepts a routes path
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    for (let key in state) {
      setState(key, state[key]);
    }

	try {
		
		await userService.signup(state); // this finishes, after the signup fetch call sets the token in localstorage
		// after this we can route the user to whereever we want
		// the jwt token is now stored in localstorage
		handleSignUpOrLogin(); // this function is from the app, which gets the token and sets the user in the App component state
		// switch the view, switch what page we are on
		navigate('/')

	} catch(err){
		console.log(err.message, ' this is the error in signup')
		setError('Check your terminal, there was an error signing up')
	}
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="red" textAlign="center">
          <Image src="https://i.imgur.com/bUgSIB1.png" /> Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Signup
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default SignUpPage;
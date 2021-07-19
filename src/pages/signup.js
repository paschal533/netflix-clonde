import { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../container/header";
import { FooterContainer } from "../container/footer";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from '../constants/routes';



export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = firstName === '' || password === '' || emailAddress === '';
    const handleSignUp = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1.
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }


    return (
        <>
            <HeaderContainer> 
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign In Now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you are not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
            )
}

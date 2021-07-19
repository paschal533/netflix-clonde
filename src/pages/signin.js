import { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../container/header";
import { FooterContainer } from "../container/footer";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from '../constants/routes';



export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = password === '' || emailAddress === '';
    const handleSignIn = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
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
                    <Form.Base onSubmit={handleSignIn} method="POST">
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
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign Up Now</Form.Link>
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

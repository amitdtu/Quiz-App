import React, { useState } from 'react';
import { Input, Label, FormGroup, Button, Form, Row, Col } from 'reactstrap';
import config from '../config';
import { withRouter } from 'react-router-dom';

const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyBr5sPPAzjTxZD2Lkg10nh7gXLAz_Ub1NM",
  authDomain: "quiz-game-2cd9a.firebaseapp.com",
  databaseURL: "https://quiz-game-2cd9a.firebaseio.com",
  projectId: "quiz-game-2cd9a",
  storageBucket: "quiz-game-2cd9a.appspot.com",
  messagingSenderId: "230059905274",
  appId: "1:230059905274:web:9cd542e9dfa2511bceb943",
  measurementId: "G-Q2574W7JDV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const Auth = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [msg, setMsg] = useState(null);
    // const [isAuth, setIsAuth] = useState(false);

    const signUpHandler = () => {
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                setMsg("Hi " + response.user.email + " Sign Up successfully. Login to play the game.");
                setMsgNull();
            }).catch(error => {
                setMsg(error.message);
                setMsgNull();
            })
        resetForm();
    }

    const setQuizPath = () => {
        props.history.replace("/quiz")
    }

    const loginHandler = () => {
        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                setMsg("Hi " + response.user.email + " you are login now!!!");
                setMsgNull();
                // setIsAuth(true)
                setQuizPath()


            })
            .catch(error => {
                if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                    setMsg("First Sign Up, then try to login")
                } else {
                    // console.log(error.message)
                    setMsg(error.message);
                }
                // setIsAuth(false)
                setMsgNull();
            })
        resetForm();
    }

    const setMsgNull = () => {
        setTimeout(() => {
            setMsg(null)
        }, 3000);
    }
    const resetForm = () => {
        document.querySelector('#email').value = ''
        document.querySelector('#password').value = ''
    }

    return (
        <Form className="mt-4">
            <Row form className="justify-content-center">
                <Col md={4}>
                    <FormGroup>
                        <Label for="email" className="text-white">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                </Col>
            </Row>
            <Row form className="justify-content-center">
                <Col md={4}>
                    <FormGroup >
                        <Label for="exampleEmail" className="text-white">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                </Col>
            </Row>
            <p className="text-white text-center">{msg}</p>
            <Row form className="justify-content-center">
                <Col md={4} className="offset-2">
                    <Button color="primary" className="mr-4" onClick={loginHandler}>Login</Button>
                    <Button color="warning" onClick={signUpHandler}>Sign Up</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default withRouter(Auth);

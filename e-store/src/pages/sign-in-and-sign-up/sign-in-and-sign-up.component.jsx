import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSingnUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
);

export default SignInAndSingnUpPage;
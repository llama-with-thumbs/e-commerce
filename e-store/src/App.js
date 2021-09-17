import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/e-commerce' component={HomePage} />
        <Route path='/e-commerce/shop' component={ShopPage} />
        <Route path='/e-commerce/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/e-commerce' component={HomePage} />
        <Route path='/e-commerce/shop' component={ShopPage} />
        <Route path='/e-commerce/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;

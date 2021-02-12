import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/e-commerce/' component={HomePage} />
        <Route path='/e-commerce/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

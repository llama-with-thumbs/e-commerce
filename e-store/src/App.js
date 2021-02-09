import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props);
  return(
    <div>
      <h2> Hats </h2>
    </div>
  )};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/e-commerce/' component={HomePage} />
        <Route path='/e-commerce/shop/hats/' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, Register } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

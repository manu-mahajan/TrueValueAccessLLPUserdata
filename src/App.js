import { BrowserRouter,Switch , Route} from 'react-router-dom';
import './App.css';
import Content from './Table'
import User from './User'

function App() {
  return (
    <BrowserRouter basename='users'>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/:id" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

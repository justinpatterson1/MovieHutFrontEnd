import '../assets/css/App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import HomePage from '../pages/HomePage';

function App() {
  return (
    <div >
       
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Router> 

          <Switch>

            <Route exact path="/">

                <HomePage/>

            </Route>

            <Route exact path="">


            </Route>

            <Route exact path="">

              

            </Route>

          </Switch>
    </Router>
    </div>
  );
}

export default App;

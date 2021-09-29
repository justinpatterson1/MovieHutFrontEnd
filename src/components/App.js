import React,{useState,useEffect} from 'react'
import '../assets/css/App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import MovieContext from '../Context/MovieContext'
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';



function App() {

  const [movie,setMovie] = useState([{
    name:"",
    rating:0,
    price:0,
    featured:false,
    type:"movie"
  }]);

  useEffect(() => {

    fetch(`http://localhost:4000/movie`)
    .then(res=>res.json())
    .then((json)=>{
    
        setMovie(json.data)
        console.log(json.data)
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <div >
       
         
        <Router> 

        <MovieContext.Provider value={{movie,setMovie}}>

          <Switch>

            <Route exact path="/">

                <HomePage/>

            </Route>

            <Route exact path="/admin">

              <AdminPage/>

            </Route>

            <Route exact path="">

              

            </Route>

            </Switch>
        </MovieContext.Provider>
    </Router>
    </div>
  );
}

export default App;

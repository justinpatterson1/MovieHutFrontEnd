import {useEffect,useContext}from 'react';
import {useHistory} from "react-router-dom"
import LoginContext from "../Context/LoginContext";
import {
    Route
  } from "react-router-dom";

const ProtectedRoute = (props) => {
   
    const {isLoggedIn} = useContext(LoginContext);
    const redirect = useHistory();
   

    return (
        <>
            {!isLoggedIn.status ? redirect.push("/auth") 
            :
            isLoggedIn.user.level==props.role ?
            (
                <Route exact path={props.path}>
                {props.component}
                </Route>
            ) : redirect.push("/") 

            }
           
        </>
    )
}

export default ProtectedRoute

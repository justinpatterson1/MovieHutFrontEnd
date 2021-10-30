import { useState, useContext} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useHistory,useParams,useLocation} from "react-router-dom";
import jwt_decode from "jwt-decode";
import SuperheroContext from "../context/heroContext";

const LoginPage = () => 
{

    const {setIsLogin} = useContext(SuperheroContext);

    const redirect = useHistory();
    
    const [loginFormData, setLoginFormData] = useState({
        email : "",
        password :""
    });

    const [errorData , setErrorData] = useState({
        email : "",
        password : "",
        bothEmailAndPass : ""
    })

    const onHandleChange = (e)=>
    {
        const {id,value} = e.target;
        
        setLoginFormData({...loginFormData, [id] : value});
    }

    

    const onLogin = async (e)=>{

        e.preventDefault();

        try
        {

            const res=  await fetch("http://localhost:5000/users/auth",{
                    method :"POST",
                    headers : {
                        'Content-Type': 'application/json',
                         
                    },
                    body : JSON.stringify(loginFormData)
                })

            const json = await res.json();
            
            if(res.status!=200)
            {
                const newError = new Error();
                newError.error =json.error;
                newError.status=res.status;

                throw newError;
                
            }
           
            //login in
            alert(json.message);
            localStorage.setItem("token",json.token);
            const token =localStorage.getItem("token");
            const currentLoggedInUser = jwt_decode(token);
            setIsLogin({ user:currentLoggedInUser, status:true});

            setErrorData({});

            if(currentLoggedInUser.role==='admin')
            {
                alert("YOu are an admin")
                redirect.push("/admin/dashboard");  
            }
            else if (currentLoggedInUser.role==='user')
            {

                alert("You are a user")
                redirect.push("/user/dashboard"); 
            }
                   
        }

        catch(err)
        {

            if(err.status===400)
            {

                const errors = {}
              
                for(let i=0; i<err.error.length; i++)
                {
            
                    const {key,message} = err.error[i];

                     if (key ==="email")
                    {
                       errors.email = message;
                    }

                    if (key ==="password")
                    {
                        errors.password=message
                    }

                    if(key==="bothEmailPassword")
                    {
                        errors.bothEmailAndPass=message;
                    }
 
                }

                setErrorData(errors)
                
            }
            
        
        }

    }

    return (
        <div className="grid grid-row-3" id="main-container">  
        <Header/>
        <main>
            <section id="login-section">

            <div className= "container">

                <h1>Login</h1>

                <form onSubmit={onLogin}>

                <div class="error">{errorData.bothEmailAndPass}</div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={loginFormData.email} onChange={onHandleChange} />
                         <div class="error">{errorData.email}</div>
                    </div>


                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={loginFormData.password} onChange={onHandleChange}/>
                    <div class="error">{errorData.password}</div>
                    </div>


                    <div className="form-control">
                        <button className="btn" type="submit">Login</button>
                    </div>

                </form>

            </div>

            </section>
        </main>
        <Footer/>
    </div>
    )
}

export default LoginPage




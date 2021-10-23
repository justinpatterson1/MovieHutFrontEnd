import React,{useState} from 'react'

const Login = () => {

    const  [login,setLogin] = useState({
        email:"",
        password:""
    })

    const loginUser =(evt)=>{
        evt.preventDefault()

        fetch('http://localhost:4000/users/auth',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(login)
        })
    }
    return (
        <div className='grid col-1' style={{alignItems:'center' , height:'100vh'}}>
            <div className='' style={{width:'30%',margin:'0 auto'}}>
            <h1 className='mb-3' style={{textAlign:'center',color:"white", fontSize:'2rem'}}>Login</h1>
                <form>
                <div>
                    
                            <div class="field">
                                <label class="label has-text-white"></label>
                                <div class="control">
                                    <input class="input" type="text" value={login.email} placeholder="email" onChange={(evt)=>{
                                        setLogin({
                                            ...login,
                                            email:evt.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label has-text-white"></label>
                                <div class="control">
                                    <input class="input" type="password" value={login.password} placeholder="password" onChange={(evt)=>{
                                        setLogin({
                                            ...login,
                                            password:evt.target.value
                                        })
                                    }}/>
                                </div>
                            </div>
                            <div class="field is-grouped is-grouped-centered">
                        <p class="control">
                            <input className="button is-primary" type="submit" name="Submit" value="Submit"/>
                        </p>
                        <p class="control">
                            <a class="button is-light">
                            Cancel
                            </a>
                        </p>
                        </div>
                        </div>
                    </form>
                    </div>
                    
        </div>

    )
}

export default Login

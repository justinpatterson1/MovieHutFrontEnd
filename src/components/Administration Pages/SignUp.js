import React,{useState} from 'react'



const SignUp = () => {

    const [user,setUser] = useState({
        name:"",
        address:"",
        email:"",
        password:""
    })
    const addNewUser = (evt)=>{
        evt.preventDefault();

        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)

            
        })
        .catch(err=>{console.log(`Error:${err}`)})
        
        setUser({
            name:"",
            address:"",
            email:"",
            password:""
        })
        console.log(user)
    }
    return (
        <div className='grid col-1' style={{alignItems:'center' , height:'100vh'}}>
            <div className='' style={{width:'30%',margin:'0 auto'}}>
            <h1 className='mb-3' style={{textAlign:'center',color:"white", fontSize:'2rem'}}>Sign Up</h1>
                <form onSubmit={(evt)=>{addNewUser(evt)}}>
                <div>
                    <div className='grid col-2' style={{columnGap:'10px'}}>
                            <div class="field">
                                <label class="label has-text-white">First Name</label>
                                <div class="control">
                                    <input class="input" type="text" value={user.firstName} placeholder="e.g Alex" onChange={(evt)=>{
                                        setUser({
                                            ...user,
                                            firstName:evt.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label has-text-white">Last Name</label>
                                <div class="control">
                                    <input class="input" type="text" value={user.lastName} placeholder="e.g Smith" onChange={(evt)=>{
                                        setUser({
                                            ...user,
                                            lastName:evt.target.value
                                        })
                                    }}/>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Address</label>
                            <div class="control">
                                <input class="input" type="text" value={user.address} placeholder="e.g 120 Sesame Street" onChange={(evt)=>{
                                    setUser({
                                        ...user,
                                         address:evt.target.value
                                    })
                                }}/>
                            </div>
                    </div>
                        
                   

                        <div class="field">
                            <label class="label has-text-white">Email</label>
                            <div class="control">
                                <input class="input" type="email" value={user.email} placeholder="e.g.alexsmith@gmail.com" onChange={(evt)=>{
                                    setUser({
                                        ...user,
                                         email:evt.target.value
                                    })
                                }}/>
                            </div>
                    </div>
                    <div class="field">
                            <label class="label has-text-white">Password</label>
                            <div class="control">
                                <input class="input" type="password" value={user.password} placeholder="e.g. 1234" onChange={(evt)=>{
                                     setUser({
                                         ...user,
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


export default SignUp

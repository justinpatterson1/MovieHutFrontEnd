import React from 'react'

const SignUp = () => {
    return (
        <div className='grid col-1' style={{alignItems:'center' , height:'100vh'}}>
            <div className='' style={{width:'30%',margin:'0 auto'}}>
            <h1 style={{textAlign:'center',color:"white", fontSize:'2rem'}}>Sign Up</h1>
                <div>
                        <div class="field">
                            <label class="label has-text-white">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="e.g Alex Smith"/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Address</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="e.g 120 Sesame Street"/>
                            </div>
                    </div>
                        
                    <div class="field">
                            <label class="label has-text-white">D.O.B</label>
                            <div class="control">
                                <input class="input" type="date" placeholder="e.g. alexsmith@gmail.com"/>
                            </div>
                    </div>

                        <div class="field">
                            <label class="label has-text-white">Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                            </div>
                    </div>
                    <div class="field">
                            <label class="label has-text-white">Password</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="e.g. 1234"/>
                            </div>
                    </div>

                    <div class="field is-grouped is-grouped-centered">
                        <p class="control">
                            <a class="button is-primary">
                            Submit
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-light">
                            Cancel
                            </a>
                        </p>
                        </div>
            </div>
            
        </div>
        </div>
    )
}


export default SignUp

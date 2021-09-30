import React,{useContext} from 'react'
import {ImCancelCircle} from 'react-icons/im'
import EditFormContext from '../../Context/EditFormContext'


const EditModal = () => {

    const {editFormVisible,setEditFormVisible} = useContext(EditFormContext)
    return (
        <div id='edit-modal' className={editFormVisible === true ? "":"hide"} >
            <div className='grid col-1' style={{alignItems:"center",height:"100%"}}>
                <div className='grid col-1 mt-6 '>
                    <div className='grid col-1' style={{justifyItems:'right',marginTop:'20px',marginRight:'20px',fontSize:'2rem'}} onClick={()=>{
                        setEditFormVisible(false)
                    }}>
                        <ImCancelCircle/>
                    </div>
                    <div id='form-div' >
                        <div class="field">
                            <label class="label">Title</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Title" name="title" id="title" />
                                </div>
                        </div>
                        <div class="field">
                            <label class="label">Description</label>
                            <div class="control">
                                <input class="input" type="text" name="description" id="description" placeholder="Description"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Price</label>
                            <div class="control">
                                <input class="input" type="text" name="price" id="price" placeholder="Price"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Trailer</label>
                            <div class="control">
                                <input class="input" type="text" name="trailer" id="trailer" placeholder="Trailer"/>
                            </div>
                        </div>

                        <div class="control">
                            <div class="select mb-2">
                                <select name="type" id="type">
                                    <option disabled selected hidden >Type</option>
                                    <option value='Movie'>Movie</option>
                                    <option value='Tv Show'>Tv Show</option>
                                    
                                </select>
                            </div>
                        </div>

                        <div class="control">
                            <div class="select">
                                <select name="genre" id="genre">
                                    <option disabled selected hidden>Genre</option>
                                    <option value='Comedy'>Comedy</option>
                                    <option value='Action'>Action</option>
                                    <option value='Suspense'>Suspense</option>
                                    <option value='Horror'>Horror</option>
                                </select>
                            </div>
                        </div>

                        <p>Feature:</p>
                        <div class="control">
                            <label class="radio">
                                <input type="radio" name="answer" value='true'/>
                                True
                            </label>
                            <label class="radio">
                                <input type="radio" name="answer" value='false' checked/>
                                False
                            </label>
                        </div>

                        <div class="file mt-3">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume"/>
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                            </label>
                        </div>

                        <div  style={{textAlign:'center'}}>
                            <input className='p-3' type="submit" value="submit" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal

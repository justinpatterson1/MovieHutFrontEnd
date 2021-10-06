import React,{useContext,useState} from 'react'
import {ImCancelCircle} from 'react-icons/im'
import EditFormContext from '../../Context/EditFormContext'
import MovieContext from '../../Context/MovieContext'
import {useHistory} from "react-router-dom"


const EditModal = () => {

    const history = useHistory();
    const {editFormVisible,setEditFormVisible} = useContext(EditFormContext);
    const{movie,setMovie} = useContext(MovieContext);
    const[formInput,setFormInput] = useState({    
        name:"",
        rating:0,
        price:0,
        featured:false,
        description:"",
        type:"",
        genre:"",
        trailer:"",
        img:[]
})



    const addNewMovie = (evt)=>{
       
        evt.preventDefault();

        let image= document.querySelector(".file-input")

        const formData = new FormData()

        formData.append("name",formInput.name)
        formData.append("rating",formInput.rating)
        formData.append("price",formInput.price)
        formData.append("featured",formInput.featured)
        formData.append("description",formInput.description)
        formData.append("type",formInput.type)
        formData.append("genre",formInput.genre)
        formData.append("trailer",formInput.trailer)
        formData.append("img",image.files[0])

        console.log(formData)
        fetch('http://localhost:4000/movie',{
            method:'POST',
              body:formData
            //body: formData
        })
        .then(res => res.json())
        .then(json=>{

            setMovie([...movie,json.data])

            setFormInput({    
                name:"",
                rating:0,
                price:0,
                featured:false,
                description:"",
                type:"",
                genre:"",
                trailer:"",
                img:""
        })
        
        alert("Movie added")
        history.push("/");
        })
        .catch(err => `error is ${err}`)
    }

    return (
        <div id='edit-modal' className={editFormVisible === true ? "":"hide"} >
            <div className='grid col-1' style={{alignItems:"center",height:"100%"}}>
                <div className='grid col-1 mt-6 '>
                    <div className='grid col-1' style={{justifyItems:'right',marginTop:'20px',marginRight:'20px',fontSize:'2rem'}} onClick={()=>{
                        setEditFormVisible(false)
                    }}>
                        <ImCancelCircle/>
                    </div>
                    <form id='form-div' onSubmit={addNewMovie}>
                        <div class="field">
                            <label class="label">Title</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Title" name="title" id="title" value={formInput.name}  onChange={(evt)=>{
                                        
                                        setFormInput({
                                            ...formInput,
                                            name:evt.target.value
                                        })
                                    }}/>
                                </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Price</label>
                            <div class="control">
                                <input class="input" type="text" name="price" id="price" placeholder="Price" value={formInput.price} onChange={(evt)=>{
                                        
                                        setFormInput({
                                            ...formInput,
                                            price:evt.target.value
                                        })
                                    }}/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Trailer</label>
                            <div class="control">
                                <input class="input" type="text" name="trailer" id="trailer" value={formInput.trailer}placeholder="Trailer" onChange={(evt)=>{
                                        
                                        setFormInput({
                                            ...formInput,
                                            trailer:evt.target.value
                                        })
                                    }}/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Description</label>
                            <div class="control">
                                <textarea  class="input" type="text" name="description" value={formInput.description} id="description" placeholder="Description" onChange={(evt)=>{
                                        
                                        setFormInput({
                                            ...formInput,
                                            description:evt.target.value
                                        })
                                    }}/>
                            </div>
                        </div>

                        <div class="control">
                            <div class="select mb-2">
                                <select name="type" id="type" onChange={(evt)=>{
                                        
                                        setFormInput({
                                            ...formInput,
                                            type:evt.target.value
                                        })
                                    }}>
                                    <option disabled selected hidden >Type</option>
                                    <option value='Movie'>Movie</option>
                                    <option value='Tv Show'>Tv Show</option>
                                    
                                </select>
                            </div>
                        </div>

                        <div class="control">
                            <div class="select">
                                <select name="genre" id="genre" onChange={(evt)=>{
                                        
                                        setFormInput({
                                            ...formInput,
                                            genre:evt.target.value
                                        })
                                    }}>
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
                                <input type="radio" name="answer" value='true' onChange={(evt)=>{
                                        
                                        setFormInput({
                                            ...formInput,
                                            featured:evt.target.value
                                        })
                                    }}/>
                                True
                            </label>
                            <label class="radio">
                                <input type="radio" name="answer" value='false' checked onChange={(evt)=>{
                                        
                                        setFormInput({
                                            ...formInput,
                                            featured:evt.target.value
                                        })
                                    }}/>
                                False
                            </label>
                        </div>

                        <div class="file mt-3">
                            <label class="file-label">
                                <input className="file-input" type="file" name="file" onChange={(evt)=>{

                                    setFormInput({
                                        ...formInput,
                                        img:evt.target.value
                                    })

                                }}/>
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

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditModal

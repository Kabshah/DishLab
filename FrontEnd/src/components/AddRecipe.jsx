import React, { useContext, useState } from 'react'
import { AppContext } from '../context/App_Context'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const AddRecipe = () => {
//  app_state sy mangwai h
  const { addRecipe } = useContext(AppContext)
  const navigate = useNavigate()
  const  [formData, setformData] = useState({
    title:"",
    ist:"",
    ing1:"",
    ing2:"",
    ing3:"",
    ing4:"",
    qty1:"",
    qty2:"",
    qty3:"",
    qty4:"",
    imgUrl:""
  })
  // name and value are html attributes here
  const onChangeHandler = (e) =>{
    const {name,value} = e.target;
    setformData({...formData, [name]:value})
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const {title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl} = formData
      const result = await addRecipe(title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl)
      console.log("Add Recipe:",result)
      toast.success(result.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate('/')
      },1500)
      console.log("result data:", result.data)
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please try again.");
    }
  }
  
  return (<>
  <ToastContainer/>
    <div className='container my-5 p-5' style={{
      "width":"500px",
      "border": "2px solid yellow",
      "borderRadius":'10px'
    }}>
      <h2 className='text-center'>Add Recipe</h2>
      <form onSubmit={onSubmitHandler} style={{
        "width": '400px',
        "margin": 'auto'
      }}
      className='my-3 p-3'>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" name='title' value={formData.title} onChange={onChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Instruction</label>
          <input type="text" name='ist' value = {formData.ist} onChange={onChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Ingredient 1</label>
          <input type="text" name='ing1' value = {formData.ing1} onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Ingredient 2</label>
          <input type="text" name='ing2'value = {formData.ing2} onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Ingredient 3</label>
          <input type="text" name='ing3' value = {formData.ing3} onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Ingredient 4</label>
          <input type="text" name='ing4' value = {formData.ing4} onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Quantity 1</label>
          <input type="text" name='qty1' value = {formData.qty1} onChange={onChangeHandler}className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Quantity 2</label>
          <input type="text" name='qty2' value = {formData.qty2} onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Quantity 3</label>
          <input type="text" name='qty3' value = {formData.qty3} onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Quantity 4</label>
          <input type="text" name='qty4' value = {formData.qty4} onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">imgURL</label>
          <input type="text" name='imgUrl' value = {formData.imgUrl} onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="container d-grid col-6">
        <button type="submit" className="btn btn-primary mt-3">Add Recipe</button>
        </div>
      </form>
    </div>
  </>
  )
}
export default AddRecipe
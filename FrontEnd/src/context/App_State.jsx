import React, { useEffect, useState } from 'react'
import { AppContext } from './App_Context'
import axios from 'axios'



const App_State = (props) => {
  const url = "http://localhost:2000/api";
  const [token, setToken] = useState("");
  const [recipe, setrecipe] = useState([])

  // const [isAuthenticated, setisAuthenticated] = useState(false)


  // register aur yeh small r wala reg apni file ma b jaa rha h
  const register = async (name,gmail,password) =>{
    const api = await axios.post(`${url}/register`, {name,gmail, password}, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return api
  }


  useEffect(() => {
    // login('kh@gmail.com', '1234')
    const fetchRecipe = async () =>{
      const api = await axios.get(`${url}/`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      } )
      console.log("recipe display",api)
      setrecipe(api.data.recipe)
    }
    fetchRecipe()
  }, [])

  
// login front-end
  const login = async (gmail, password) => {
    
    const api = await axios.post(`${url}/login`, {
      gmail, password
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    // console.log("login data",api)
    setToken(api.data.token)
    return api
  }


  const addRecipe = async(title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl) => {
    const api = await axios.post(`${url}/add`, {
      title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl
    }, {
      headers: {
        "Content-Type": "application/json",
        Auth: token
      },
      withCredentials: true,
      
    })
    // setToken(api.data.token)
    // [returning is imp for god sake]
    return api
  }
  // yeh wo biocontext.provider wala return h bss uss file kee jagah idhr krdia h
  // fileds b uski oper rkhi h toh return idhr kradia standard procedure h useContext klia

//  [issue 1: api nhi arha iska]
  const getRecipeById = async (id) => {
    const api = await axios.get(`${url}/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    console.log("Show recipe by id:",api)
    return api
  }

  // const logOut = () =>{
  //   // setisAuthenticated(false)
  //     localStorage.removeItem("token",token);
  //      // Remove the JWT
  //      setToken("")
  //     navigate("/login"); 
  // };

  
  return (
    <AppContext.Provider value={{ register,login,addRecipe,recipe,getRecipeById}}>
      {props.children}
    </AppContext.Provider>
  )
}
export default App_State
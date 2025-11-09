import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/App_Context'


const FetchRecipeById = ({id}) => {
  const {getRecipeById} = useContext(AppContext)
  const [first, setfirst] = useState("")
  // [issue 2 id undefined arhi]
  console.log(id)
  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getRecipeById(id)
      // [issue 3: idhr b data ma recipes nhi arhi log prr]
      console.log("Recipe by id:",result)
    }
    fetchRecipe()
  }, [id])
  
  return (
    <div>
      
    </div>
  )
}

export default FetchRecipeById

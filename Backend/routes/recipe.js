import express from 'express'
import { add, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } from '../controllers/recipe.js'
import { Authenticate } from '../middlewares/auth.js'
const router = express.Router()

router.post('/add',Authenticate,add)
router.get('/',getAllRecipe)
// get saved recipe
router.get('/saved',getSavedRecipe)
router.get('/:id',getRecipeById)
// saved recipe to id
router.post('/:id',Authenticate,savedRecipeById)
router.get('/user/:id',getRecipeByUserId)
export default router;
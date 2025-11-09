import { Recipe } from "../Models/Recipe.js";
import { SavedRecipe } from "../Models/SavedRecipe.js";


export const add = async (req,res) => {
    const {title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl} = req.body;
    try {
       const recipe = await Recipe.create({
        title,
        ist,
        ing1,
        ing2,
        ing3,
        ing4,
        qty1,
        qty2,
        qty3,
        qty4,
        imgUrl,
        // we wanna see which user is trying to create a recipe
        user: req.user
    }) 
        res.json({message:"Recipe created sucessfully...!",recipe})
    } catch (error) {
        res.json({message:error.message})
    }
}
export const getAllRecipe = async(req,res) => {
    const recipe = await Recipe.find({})
    res.json({recipe})
}
// we wannna get recipe by an id
export const getRecipeById = async(req,res) => {
    const id = req.params.id;
    try {
        let recipe = await Recipe.findById(id)
        if(!recipe) res.json({message:"recipe doesn't exist"})
            res.json(recipe)
    } catch (error) {
        res.json({message:error.message})
    }
}
export const getRecipeByUserId = async(req,res) => {
    const userId = req.params.id;
    try {
        let recipe = await Recipe.find({user:userId})
        if(!recipe) res.json({message:"recipe doesn't exist"})
        
        res.json({message:"recipe by userId", recipe})
    } catch (error) {
        res.json({message:error.message})
    } 
}
export const savedRecipeById = async(req,res) => {
    const id = req.params.id;
    let recipe = await SavedRecipe.findOne({recipe:id})
    if(recipe) return res.json({message:"recipe already saved"});
    recipe = await SavedRecipe.create({recipe:id})
    res.json({message:"Recipe saved sucessfully..!"})
}
export const getSavedRecipe  = async (req,res) =>{
    const recipe = await SavedRecipe.find()
    res.json({recipe})
}
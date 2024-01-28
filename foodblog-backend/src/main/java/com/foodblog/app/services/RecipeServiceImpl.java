package com.foodblog.app.services;

import com.foodblog.app.ApiResponse;
import com.foodblog.app.dao.RecipeDao;
import com.foodblog.app.model.Recipe;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService{
    private final RecipeDao recipeDao;

    public RecipeServiceImpl(RecipeDao recipeDao) {
        this.recipeDao = recipeDao;
    }

    @Override
    public List<Recipe> getAllRecipies() {
        return recipeDao.findAll();
    }

    @Override
    public ApiResponse<String> addRecipe(Recipe recipe) {
        try {
            System.out.println(recipe.getRecipeImg());
            recipeDao.save(recipe);

            return new ApiResponse<>(200, "Recipe added successfully..!", null);
        }catch (Exception e) {
            return new ApiResponse<>(401, "Internal Server Error..!", null);
        }
    }
}

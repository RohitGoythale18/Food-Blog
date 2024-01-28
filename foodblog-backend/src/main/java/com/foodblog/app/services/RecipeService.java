package com.foodblog.app.services;

import com.foodblog.app.ApiResponse;
import com.foodblog.app.model.Recipe;

import java.util.List;

public interface RecipeService {
    List<Recipe> getAllRecipies();

    ApiResponse<String> addRecipe(Recipe recipe);
}

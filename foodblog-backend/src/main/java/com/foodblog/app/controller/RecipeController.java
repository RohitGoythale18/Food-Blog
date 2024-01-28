package com.foodblog.app.controller;

import com.foodblog.app.ApiResponse;
import com.foodblog.app.model.Recipe;
import com.foodblog.app.requests.RecipeRequest;
import com.foodblog.app.services.RecipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/")
    public String sayHello(){
        return "Welcome to Food Blog Backend!";
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/get-recipe")
    public ResponseEntity<List<Recipe>> getAllRecipies() {
        List<Recipe> recipes = recipeService.getAllRecipies();
        return ResponseEntity.ok(recipes);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/add-recipe")
    public ApiResponse<String> addRecipe(@RequestBody RecipeRequest request){
        return recipeService.addRecipe(new Recipe(null, request.getRecipeName(), request.getRecipeIngredients(), request.getRecipeSteps(), request.getRecipeType(), request.getRecipeImg()));
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping("/update-recipe")
    public ApiResponse<String> updateRecipe(@RequestBody RecipeRequest request){
        return null;
    }

}

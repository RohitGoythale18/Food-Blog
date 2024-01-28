package com.foodblog.app.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "recipes")
public class Recipe {
    private String id;

    @Field(value = "recipeName")
    private String recipeName;

    @Field(value = "recipeIngredients")
    private String recipeIngredients;

    @Field(value = "recipeSteps")
    private String recipeSteps;

    @Field(value = "recipeType")
    private String recipeType;

    @Field(value = "recipeImg")
    private String recipeImg;

    public Recipe() {
    }

    public Recipe(String id, String recipeName, String recipeIngredients, String recipeSteps, String recipeType, String recipeImg) {
        this.id = id;
        this.recipeName = recipeName;
        this.recipeIngredients = recipeIngredients;
        this.recipeSteps = recipeSteps;
        this.recipeType = recipeType;
        this.recipeImg = recipeImg;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return recipeName;
    }

    public void setName(String name) {
        this.recipeName = recipeName;
    }

    public String getIngredients() {
        return recipeIngredients;
    }

    public void setIngredients(String ingredients) {
        this.recipeIngredients = recipeIngredients;
    }

    public String getSteps() {
        return recipeSteps;
    }

    public void setSteps(String steps) {
        this.recipeSteps = recipeSteps;
    }

    public String getType() {
        return recipeType;
    }

    public void setType(String type) {
        this.recipeType = recipeType;
    }

    public String getRecipeImg() {
        return recipeImg;
    }

    public void setRecipeImg(String recipeImg) {
        this.recipeImg = recipeImg;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "id='" + id + '\'' +
                ", recipeName='" + recipeName + '\'' +
                ", recipeIngredients='" + recipeIngredients + '\'' +
                ", recipeSteps='" + recipeSteps + '\'' +
                ", recipeType='" + recipeType + '\'' +
                ", recipeImg='" + recipeImg + '\'' +
                '}';
    }
}

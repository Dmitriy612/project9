const categoriesRouter = require('express').Router();
const {findAllCategories, createCategory, updateCategory, checkEmptyName, deleteCategory, checkIsCategoryExists} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const { checkAuth } = require("../middlewares/auth.js");

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, checkAuth,checkIsCategoryExists, createCategory, sendCategoryCreated)
categoriesRouter.put('/categories/:id', checkEmptyName, checkAuth, updateCategory, checkIsCategoryExists, sendCategoryUpdated)
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;

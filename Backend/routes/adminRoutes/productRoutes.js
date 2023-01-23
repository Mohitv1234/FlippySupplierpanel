const express = require("express")
const { addBrandByAdmin, updateBrandByAdmin, getaAllBrandByAdmin, deleteBrandByAdmin } = require("../../controller/adminController/brandController")
const { createProductByAdmin, updateProductByAdmin, getAllPRoductsByAdmin, deleteProductByAdmin, createProductReviews, getSingleProductByAdmin } = require("../../controller/adminController/productController")
const { updateSellerProfile } = require("../../controller/sellerController/sellerController")
const {isAuthenticatedUser, authorizeRoles, isAuthenticatedAdmin} =require("../../middleware/auth")
const Router = express.Router()


// Products -----------------------
Router.route("/admin/add/product").post(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'), createProductByAdmin)
Router.route("/admin/single/product/:id").get(isAuthenticatedAdmin,authorizeRoles('superadmin','admin',"customer_support"), getSingleProductByAdmin)
Router.route("/admin/all/product").get(isAuthenticatedAdmin,authorizeRoles('superadmin','admin',"customer_support"), getAllPRoductsByAdmin)
Router.route("/admin/update/product/:id").put(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'), updateProductByAdmin)
Router.route("/admin/delete/product/:id").delete(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'),deleteProductByAdmin)



// Brands
Router.route("/admin/add/brands").post(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'),addBrandByAdmin )
Router.route("/admin/all/brands").get(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'),getaAllBrandByAdmin )
Router.route("/admin/update/brands/:id").put(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'),updateBrandByAdmin )
Router.route("/admin/delete/brands/:id").delete(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'),deleteBrandByAdmin )




 

module.exports =Router


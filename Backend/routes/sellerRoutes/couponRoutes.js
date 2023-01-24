const express = require("express")
const { getAllCouponBySeller, createCouponBySeller } = require("../../controller/sellerController/couponController")
const {isAuthenticatedSeller} =require("../../middleware/auth")
const Router = express.Router()


Router.route("/seller/all/coupons").get(isAuthenticatedSeller, getAllCouponBySeller)
Router.route("/seller/add/coupons").post(isAuthenticatedSeller, createCouponBySeller)


module.exports =Router
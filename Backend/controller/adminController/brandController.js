const { json } = require("body-parser");
const catchAsyncError = require("../../middleware/catchAsyncError");
const AllUser = require("../../models/alluser");
const Seller = require("../../models/sellerModel/sellerSchema");
const Superadmin = require("../../models/superadmin");
const ErrorHander = require("../../utils/errorhander");
const Brand = require("../../models/brandSchema");
const ApiFeatures = require("../../utils/apifeatures");




// create Brand by Admin

exports.addBrandByAdmin = catchAsyncError(async (req,res,next)=>{
        req.body.admin_id = req.admin.id  ,
        req.body.added_by = req.admin.role,
        req.body.name = req.body.name.toUpperCase()
    const brandname = await Brand.findOne({name:req.body.name})
     if(brandname){
        return next(new ErrorHander("this brand name is already exist"))
    }
    else{

        const brand = await Brand.create(req.body)
        res.status(201).json({
            success:true,
            brand,
           
        })
    }
     

})



//  get All Brand By Admin
exports.getaAllBrandByAdmin = catchAsyncError(async (req,res,next)=>{
    const resultperPage = 20;
  const apiFeatures = new ApiFeatures( Brand.find(),req.query).search().pagination(resultperPage);
  const brands = await apiFeatures.query
    const brandCount = await Brand.countDocuments()
  const filterBrandCount = brands.length


            res.status(200).json({
                success:true,
                brands,
                brandCount,
                filterBrandCount

            })
   

})




// update Brand by Admin

exports.updateBrandByAdmin = catchAsyncError(async (req,res,next)=>{

    const updateBrand = {
        name:req.body.name.toUpperCase(),
        logo:req.body.logo,
        meta_title:req.body.meta_title,
        meta_descritption :req.body.meta_descritption
    }

    const brand  = await Brand.findByIdAndUpdate({_id:req.params.id}, updateBrand ,{new:true,runValidators:true})

    res.status(200).json({
        success:true,
        brand
    })
})


// Delete Brand by admin

exports.deleteBrandByAdmin = catchAsyncError(async (req,res,next)=>{

    const brand  = await Brand.findByIdAndDelete({_id:req.params.id},{new:true,runValidators:true})

    if(!brand){
        return next(new ErrorHander(`brand does not exist with this id ${req.params.id}`, 401))
    }

    res.status(200).json({
        success:true,
        msg:"this brand deleted successfully"
    })
})


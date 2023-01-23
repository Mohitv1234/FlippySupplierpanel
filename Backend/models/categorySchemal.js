const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  parent_name: {
    type: String,
    required: [true, "please add category name"],
    unique:[true,"this category already exist"],
    lowercase: true,

  },

 
  meta_title:{
    type:String
  
  },
  meta_description:{
    type:String
  
  },

  sub_category:[
       {
        sno:{
            type:Number
        },
        sub_name:{
           type:String,
           required: [true, "please add sub category"],
           unique:[true,"this category already exist"],
           lowercase: true,

        },
        featured:{
          type:Boolean,
          default:false
        },
        icon:{
          type:String
      
        },
        commission:{
          type:Number,
          required:[true, "please enter commision"]
        },
       },
       

       
      ]    
      
,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("category", categorySchema);

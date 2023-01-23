const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  sellerProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AllUser",
  },
  gst: {
    type: String,
    unique:true,
    required: [true, "please enter your gst number"],
    minLength: [15, "gst number cannot be less than 15"],
    maxLength: [15, "gst number cannot grater than 15"],
  },

  pickup_address: {
    house_no: {
      type: String,
      required: [true, "please enter Room/Floor/Building Number"],
    },
    landmark: {
      type: String,
      required: [true, "please enter landmark or street/locality"],
    },
    postal_code: {
      type: String,
      minLength: [6, "postal code cannot be less than 6 character"],
      maxLength: [6, "postal code cannot be greater than 6 character"],
    },

    city: {
      type: String,
      required: [true, "please enter pickup city"],
    },
    state: {
      type: String,
      required: [true, "please enter pickup state"],
    },
  },

  bank_details:{
    account_number:{
      type:String,
      unique:true,
      required:[true,"please enter your bank account number"]
    },
    ifsc_code :{
      type:String,
      required:[true,"please enter your ifsce code"]
    }
  },
  supplier_details:{
    store_name:{
      type:String,
      required:[true,"please enter your store name"]
    },
    your_name:{
      type:String,
      required:[true, "please enter your full name"]
    }
  },
 
  verification_status:{
    type:Boolean,
    default:false,
    required:[true,"please verify your account"]
  },
   activation_status:{
    type:String,
    default:"Pending",
    required:true
  }
  
  

  

});
sellerSchema.set('timestamps',true)


module.exports = mongoose.model("seller", sellerSchema);

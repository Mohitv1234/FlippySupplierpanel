const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema({

name:{
    type:String,
    required:[true,"please enter brand name"],

},
added_by:{
    type:String,
    required:true
},
admin_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "AllUser",
},

logo:{
    type:String,
    // required:[true,"please upload brand logo"]

},

top:{
type:Number,
default:1,
max:[10, "please enter top 10 brand"]
},

meta_title:{
    type:String,
    
},
meta_description:{
    type:String,   
}

});

brandSchema.set('timestamps',true)


module.exports = mongoose.model("brand", brandSchema);

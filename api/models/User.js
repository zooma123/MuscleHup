const mongoose = require  ("mongoose");
const validator = require ('validator')
const bcrypt =  require  ('bcryptjs')
const userSchema = new mongoose.Schema({

Firstname : {  type:String ,  required : [true, "Please Tell Us Your Name"]}, 

Lastname:{ type: String ,  required : [true , "Please Provide Your Email"]
},

Username : {
type : String , required : true,unique :true 


},

email : {
type : String , required : true , unique : true ,
validate : [validator.isEmail, 'please Provide a email'] } ,


password: {type :String ,required: [true , 'Please provide a Password'] , minlength: 6 , select :false},

roles: {type : String , enum:["user" , "admin"] , default: "user" } , 

tokens : [{type : Object}],


//Adding Cart For User


},

{
  timestamps: true , 
},


)
userSchema.methods.correctPassword = async function(candidatePassword , userPassword){
  return await bcrypt.compare(candidatePassword,userPassword)
  
  }
  

module.exports =  mongoose.model('user' , userSchema);
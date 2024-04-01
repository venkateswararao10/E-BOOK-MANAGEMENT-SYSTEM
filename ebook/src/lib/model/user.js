/*import mongoose from "mongoose";
const { Schema } = mongoose;
let User;
try{
   User= mongoose.models.User;
   console.log(User.findOne({username:'sai'}));
}
catch(e){
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    fullname:{
        type: String,
        required: true,
      },
    email:{
        type: String,
        required: true,
      },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

User = mongoose.model("user", userSchema);
}
export default User;
*/

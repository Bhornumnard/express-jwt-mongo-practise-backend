const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
username : {type: String, required: true},
password: { type: String, required: true, minlength: 3 },
profilePic : {type: String, required: true,},
name:  { type: String, required: true,  },
skill:  { type: String, required: true,  },
// email: { type: String, required: true, trim: true, unique: true, index: true },
// role: { type: String, default: 'member' }
},{
  collection: 'users'
});

// userSchema.methods.encryptPassword = async (password)  => {
//   const salt = await bcrypt.genSalt(10);
//   const hashPassword = await bcrypt.hash(password, salt);
//   return hashPassword;
// }

// userSchema.methods.comparePassword = async function (password)  {
//   console.log(password);
//   console.log(this.password);
//   const isValid = await bcrypt.compare(password, this.password);
//   return isValid;
// }
  
  const User = mongoose.model('users', userSchema);
  
  module.exports = User;;
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
        name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        text: true,
      },
      title: {
        type: String,
        required: [true, "job title is required"],
        trim: true,
        text: true,
      },
      department: {
        type: String,
        required: [true, "department is required"],
        trim: true,
        text: true,
      },
      email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        unique:true
      },
      phone_number: {
        type: String,
        required: [true, "phone number is required"],
        unique:true
      },
      picture: {
        type: String,
        trim: true,
        default:null,
      },
      age: {
        type: Number,
        required: true,
        trim: true,
      },
      emp_hist: {
        type: String,
      },
      education: {
        type: String,
      },

},
{
    timestamps: true
}
);

module.exports = mongoose.model("users", userSchema)
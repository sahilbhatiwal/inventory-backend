const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// defination of schema
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
      trim: true,
    },
    age: {
      type: Number,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    reports: [],
    password: {
      // select: false,
      type: String,
      minlength: 8,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// encrypt password before save
userSchema.pre("save", async function (next) {
  // if any thing changes in user then password doesnt not get encrypted again ( double encryption)
  if (!this.isModified("password")) return next();

  console.log(this.password);
  console.log(this.name);
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// check if password is valid or not
userSchema.methods.authenticate = async function (password) {
  // await this.select('+password').exec();
  console.log(this.password);
  return await bcrypt.compare(password, this.password);
};

// generate jwt token
userSchema.methods.generateJWTToken = async function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRESIN,
  });
};

module.exports = mongoose.model("User", userSchema);

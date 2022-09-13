const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({

    fullName:
    {
        type: String,
        required : [true, "Name is required"],
        minLength : [3, "Must exceed three characters"],
        maxLength : [35, "Cannot exceed thirty-five characters"]
    },

    email:
    {
        type: String,
        required : [true, "Email Address is required"],
        validate: {
            validator: function (v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(v);
            },
            message: "Please enter a valid email address",
        },
    },

    password:
    {
        type: String,
        required: [true, "Password is required"]
    },

}, { timestamps: true });


UserSchema.virtual("confirmPassword")
.get(() => this._confirmPassword)
.set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match");
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    })
    .catch((err) => {
        console.log("inside error block");
        console.log(err);
    });
});


module.exports = mongoose.model('User', UserSchema);
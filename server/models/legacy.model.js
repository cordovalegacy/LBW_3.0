const mongoose = require('mongoose');
const LegacySchema = new mongoose.Schema({

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
        required : [true, "Email Address is required"]
    },

    phoneNumber:
    {
        type: Number,
        required : [true, "Phone Number is required"]
    },

    budget:
    {
        type: Number,
        required : [true, "Enter a budget you'd like to stick to"]
    },
    
    cpu: 
    {  
        type: String,
        required : [true, "CPU is required"]
    },

    gpu:
    {  
        type: String,
        required : [true, "GPU is required"]
    },

    ram:
    {  
        type: String,
        required : [true, "RAM is required"]
    },

    storage:
    { 
        type: String,
        required : [true, "Storage is required"]
    },

    cooling:
    {  
        type: String,
        required : [true, "CPU is required"]
    },

    theme:
    {  
        type: String,
        required : [true, "Desired aesthetic is required"],
        maxLength : [50, "cannot exceed fifty characters"] 
    },

    special: 
    {
        type: String,
        maxLength : [100, "cannot exceed one-hundred characters"]
    },

    inventoryCpu:
    {
        type: String
    },

    inventoryGpu:
    {
        type: String
    },

    inventoryRam:
    {
        type: String
    },

    inventoryStorage:
    {
        type: String
    },

    inventoryPsu:
    {
        type: String
    },

    inventoryMotherboard:
    {
        type: String
    },

    inventoryCooling:
    {
        type: String
    },
    
    inventoryCase:
    {
        type: String
    },

    inventoryAccessories:
    {
        type: String
    },

}, { timestamps: true });


module.exports = mongoose.model('Legacy', LegacySchema);
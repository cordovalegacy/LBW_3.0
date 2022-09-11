const Legacy = require('../models/legacy.model');
const User = require('../models/user.model');
const Inventory = require('../models/inventory.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    
    // CUSTOM SECTION START

    getAllBuilds: (req, res) => {
        Legacy.find({})
        .then((allBuilds) => res.json(allBuilds))
        .catch((err) => { res.status(400).json({err}) });
    },

    getOneBuild: (req, res) => {
        Legacy.findOne({_id: req.params.id})
        .then((oneBuild) => res.json(oneBuild))
        .catch((err) => { res.status(400).json({err}) });
    },

    createBuilds: (req, res) => {
        console.log('!!!', req.body)
        Legacy.create(req.body)
            //.then(resp => resp.json())
            .then(build => 
                {
                    console.log('===creating build', build)
                    return res.json(build)
                }
                )
            .catch((err) => { res.status(400).json({err}) });
        },

        
    updateBuilds: (req, res) => {
        Legacy.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedBuilds => res.json(updatedBuilds))
        .catch((err) => { res.status(400).json({err}) });
    },

    deleteBuilds: (req, res) => {
        Legacy.deleteOne({_id: req.params.id})
        .then(deleteBuilds => res.json(deleteBuilds))
        .catch((err) => { res.status(400).json({err}) });
    },
    
    // CUSTOM SECTION END
    // INVENTORY SECTION START

    getAllInventory: (req, res) => {
        Inventory.find({})
        .then((allInventory) => res.json(allInventory))
        .catch((err) => { res.status(400).json({err}) });
    },

    createInventory: (req, res) => {
        console.log('inventory!!!', req.body)
        Inventory.create(req.body)
            //.then(resp => resp.json())
            .then(inventory => 
                {
                    console.log('===adding inventory', inventory)
                    return res.json(inventory)
                }
                )
            .catch((err) => { res.status(400).json({err}) });
            },

            
    getCheckoutInventory: (req, res) => {
        Inventory.findOne({_id: req.params.id})
        .then((oneInventoryItem) => res.json(oneInventoryItem))
        .catch((err) => { res.status(400).json({err}) });
    },
    
    removeBuilds: (req, res) => {
        Inventory.deleteOne({_id: req.params.id})
            .then(removeBuilds => res.json(removeBuilds))
            .catch((err) => { res.status(400).json({err}) });
        },

    //INVENTORY SECTION END
    // REGISTRATION AND LOGIN SECTION START
    registerUser: async(req, res) => {
        const {body} = req;

        try {
            const queriedUser = await User.findOne({email: body.email})
            if (queriedUser) {
                console.log("queriedUser")
                console.log(queriedUser)
            } else {
                console.log(queriedUser)
                console.log("Not a queried user")
                res.status(400).json({errMsg: "This user already exists"});
                return;
            }
        } catch (error) {
            console.log("first error block")
            res.status(400).json(error);
        }

        let newUser = new User(body)
        try {
            const newUserObj = await newUser.save();
            res.json(newUserObj);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    login: async(req, res) => {
        const {body} = req;
        if(!body.email) {
            res.status(400).json({error: "Please provide email to login"})
            return;
        }
        let userQuery;

        try {
            userQuery = await User.findOne({email: body.email});
            if(userQuery === null) {
                res.status(400).json({msg: "email not found"});
            }
        } catch (error) {
            res.status(400).json(error);
        }

        const passwordCheck = bcrypt.compareSync(body.password, userQuery.password)

        if(!passwordCheck) {
            res.status(400).json({error: "Email and password do not match"});
            return;
        }
        const userToken = jwt.sign({_id: userQuery._id}, "here");
        console.log(userToken)

        res.cookie("userToken", userToken, "here", {
            httpOnly: true,
            expires: new Date(Date.now()+9000000),
        })
        .json ({message: "successful login"});
    }
    // REGISTRATION AND LOGIN SECTION END
};
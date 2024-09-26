const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");




const getAllUsers = async (req,res) => {
    try {
        const users= await userModel.find();

        if(users.length === 0) {
            return res.status(200).json({
                status: 'Succeded',
                error: 'No users to show'
            });
        }
            res.status(200).json({
                status: 'Succeded',
                users: users
            })
        
    } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
        
    }
}

const getUserById = async (req,res) => {
    try {
        const {idUser} = req.params;
        const user = await userModel.findById(idUser)
        if(!user) {
            return res.status(200).json({
                status: 'Succeded',
                message: "There's no user with that id"
            });
        }
        res.status(200).json({ status: 'Succeded', user: user})
    } catch (error) {
        return res.status(404).json({ status: "Failed", error: error.message });
    }
}


const addUser = async (req, res) => {
    try {
        console.log('palomo')
      const password = await bcrypt.hash(req.body.password, 10);
      const newUser = new userModel({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: password,
        role: req.body.role,
      });
      await newUser.save();
      res.status(200).json({ status: "succeded", newUser: newUser });
    } catch (error) {
      res.status(404).json({ status: "Failed", error: error.message });
    }
  };


  const updateUser = async (req,res) => {
    try {
        const {idUser} = req.params;
        const newParams = req.body;
        const userModified = await userModel.findByIdAndUpdate(idUser, newParams, {new:true});

        if(!userModified) {
            return res
            .status(200)
            .json({status:'Succeded', error: 'User not found with that id'})
        }
        // if(newParams.name) {
        //     user.name = newParams.name;
        // }
        // if (newParams.username) {
        //     user.username = newParams.username;
        //   }
        //   if (newParams.email) {
        //     user.email = newParams.email;
        //   }
        //   if (newParams.password) {
        //     user.password = newParams.password;
        //   }
          
        //   if (newParams.role) {
        //     user.role = newParams.role;
        //   }
        //   await user.save();



          res.status(200).json({status:'Succeded', user: userModified})
    } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
    }
  }

  const deleteUser = async (req,res) => {
    try {
        const {idUser} = req.params;
        const user = await userModel.findByIdAndDelete(idUser);
        if(!idUser) {
            return res
            .status(200)
            .json({ status: 'Succeded', error: 'User not found with that id'})
        }
        res.status(200).json({status:'Succeded', user:user});
    } catch (error) {
    res.status(404).json({ status: "Failed", error: error.message });
    }
  }

  
  
  module.exports = {getAllUsers, getUserById, addUser, updateUser, deleteUser}
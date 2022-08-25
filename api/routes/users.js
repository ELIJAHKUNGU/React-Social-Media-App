const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

router.get("/", (req, res) => {
    res.send("HELLO USER")
})

//@Update user
router.put("/:id", async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)

            } catch (err) {
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            res.status(200).json("Account has been updates")
        } catch (err) {
            return res.status(500).json(err)
        }

    } else {
        return res.status(403).json("You can only update your account")
    }
})


//delete user
//delete user
router.delete("/:id", async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account!");
    }
});

//get a user 
router.get('/:id', async(req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const { password, updateAt, ...other } = user._doc
            return res.status(200).json(other)
                ///htpps:localhost/50000/kkkfdfkd//2rdse


        } catch (error) {
            return res.status(404).json(error)


        }
    })
    //follow user
    //follow a user

router.put("/:id/follow", async(req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you already follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant follow yourself");
    }
});

//unfollow user



module.exports = router
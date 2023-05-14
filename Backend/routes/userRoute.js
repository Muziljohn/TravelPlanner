import express from "express";
import { login, register } from "../controllers/auth.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import User from "../models/userModel.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/:id", verifyUser, async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
});
router.delete(":/id", verifyUser, async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
});
router.post("/hotelBooking/:id", async (req, res) => {
  try {
    //let updatedData = [];
    const Existinguser = await User.findById(req.params.id);
    Existinguser.hotelBooking.push(req.body);
    console.log("Existging", Existinguser);

    User.findByIdAndUpdate(
      req.params.id,
      { hotelBooking: [...Existinguser.hotelBooking] },
      {
        new: true,
      },
      function (err, model) {
        if (!err) {
          res.status(200).json({
            message: model,
          });
        } else {
          res.status(500).json({
            message: err.message,
          });
        }
      }
    );

    // res.status(200).json({ id: model });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/transportBooking/:id", async (req, res) => {
  try {
    //let updatedData = [];
    const Existinguser = await User.findById(req.params.id);
    Existinguser.transportBooking.push(req.body);
    console.log("Existging", Existinguser);

    User.findByIdAndUpdate(
      req.params.id,
      { transportBooking: [...Existinguser.transportBooking] },
      {
        new: true,
      },
      function (err, model) {
        if (!err) {
          res.status(200).json({
            message: model,
          });
        } else {
          res.status(500).json({
            message: err.message,
          });
        }
      }
    );

    // res.status(200).json({ id: model });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/resturantBooking/:id", async (req, res) => {
  try {
    //let updatedData = [];
    console.log(req.body);
    const Existinguser = await User.findById(req.params.id);
    Existinguser.resturantBooking.push(req.body);
    console.log("Existging", Existinguser);

    User.findByIdAndUpdate(
      req.params.id,
      { resturantBooking: [...Existinguser.resturantBooking] },
      {
        new: true,
      },
      function (err, model) {
        if (!err) {
          res.status(200).json({
            message: model,
          });
        } else {
          res.status(500).json({
            message: err.message,
          });
        }
      }
    );

    // res.status(200).json({ id: model });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/tripBooking/:id", async (req, res) => {
  try {
    //let updatedData = [];
    console.log(req.body);
    const Existinguser = await User.findById(req.params.id);
    Existinguser.tripBooking.push(req.body);
    console.log("Existging", Existinguser);

    User.findByIdAndUpdate(
      req.params.id,
      { tripBooking: [...Existinguser.tripBooking] },
      {
        new: true,
      },
      function (err, model) {
        if (!err) {
          res.status(200).json({
            message: model,
          });
        } else {
          res.status(500).json({
            message: err.message,
          });
        }
      }
    );

    // res.status(200).json({ id: model });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", verifyAdmin, async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

export default router;

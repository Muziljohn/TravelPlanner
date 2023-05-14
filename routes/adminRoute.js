import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import User from "../models/userModel.js";
const router = express.Router();

router.get("/", verifyAdmin, async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send("error");
    next(err);
  }
});

router.delete("/user/:id", async (req, res, next) => {
  console.log(req.params.id);
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
});
router.delete("/resturantBooking/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body.id);
    const user = await User.findById(req.params.id);
    if (user) {
      console.log("letai");
      const filteredData = user.resturantBooking.filter(
        (i) => i._id != req.body.id
      );
      console.log(filteredData);
      await User.findByIdAndUpdate(
        req.params.id,
        { resturantBooking: [...filteredData] },
        {
          new: true,
        }
      );
      return res.status(200).json({
        success: true,
        message: "updated Successfully",
      });
    }
    console.log("no letai");
    res.status(400).json({ success: false, message: "incoreect id" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.put("/resturantBooking/:id", async (req, res) => {
  try {
    console.log(req.body);
    //console.log(req.params.id);
    const user = await User.findById(req.params.id);
    if (!user) {
      console.log("1");
      return res.status(200).json({ success: true, message: "user not found" });
    }
    user.resturantBooking.map((data) => {
      console.log(data._id);
      if (data._id == req.body._id) {
        Object.keys(req.body).map((dat) => {
          data[dat] = req.body[dat];
        });
      }
    });
    User.findByIdAndUpdate(
      req.params.id,
      { resturantBooking: [...user.resturantBooking] },
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
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/hotelBooking/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      console.log("letai");
      const filteredData = user.hotelBooking.filter(
        (i) => i._id != req.body.id
      );
      console.log(filteredData);
      await User.findByIdAndUpdate(
        req.params.id,
        { hotelBooking: [...filteredData] },
        {
          new: true,
        }
      );
      return res.status(200).json({
        success: true,
        message: "updated Successfully",
      });
    }
    console.log("no letai");
    res.status(400).json({ success: false, message: "incoreect id" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.put("/hotelBooking/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      console.log("1");
      return res.status(200).json({ success: true, message: "user not found" });
    }
    user.hotelBooking.map((data) => {
      console.log(data._id);
      if (data._id == req.body._id) {
        Object.keys(req.body).map((dat) => {
          data[dat] = req.body[dat];
        });
      }
    });
    User.findByIdAndUpdate(
      req.params.id,
      { hotelBooking: [...user.hotelBooking] },
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
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/transportBooking/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      console.log("letai");
      const filteredData = user.transportBooking.filter(
        (i) => i._id != req.body.id
      );
      console.log(filteredData);
      await User.findByIdAndUpdate(
        req.params.id,
        { transportBooking: [...filteredData] },
        {
          new: true,
        }
      );
      return res.status(200).json({
        success: true,
        message: "updated Successfully",
      });
    }
    console.log("no letai");
    res.status(400).json({ success: false, message: "incoreect id" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.put("/transportBooking/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      console.log("1");
      return res.status(200).json({ success: true, message: "user not found" });
    }
    user.transportBooking.map((data) => {
      console.log(data._id);
      if (data._id == req.body._id) {
        Object.keys(req.body).map((dat) => {
          data[dat] = req.body[dat];
        });
      }
    });
    User.findByIdAndUpdate(
      req.params.id,
      { transportBooking: [...user.transportBooking] },
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
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});
export default router;

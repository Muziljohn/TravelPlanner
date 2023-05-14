import express from "express";
import contactModel from "../models/contactModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const mes = await contactModel.create(req.body);
    console.log(mes);
    if (!mes) {
      res.status(200).send("erro while submiting");
    } else {
      res.status(200).json(mes);
    }
  } catch (error) {
    res.status(400).json({ errorMessage: "Muzil haasann w" });
  }
});
router.get("/", async (req, res, next) => {
  try {
    const users = await contactModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send("error");
    next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  console.log(req.params.id);
  try {
    await contactModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
});

export default router;

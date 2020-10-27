const express = require("express");
const router = express.Router();
const validationMiddleWare = require("../middleware/validation");
const authenticationmiddleWare = require("../middleware/authentecation");
const Patient = require("../models/patient");
// const { check } = require("express-validator");
require("express-async-errors");

module.exports = router;

router.get("/", async (req, res, next) => {
  const patients = await Patient.find();
  res.status(200).json(patients);
});
router.post("/addPatient", async (req, res, next) => {
  const { name, age, gender, appointment, diagnosis, drName } = req.body;
  debugger;
  const patient = new Patient({
    name,
    age,
    gender,
    appointment,
    diagnosis,
    drName,
  });
  await patient.save();
  res.json(patient);
});

router.patch(
  "/",
  authenticationmiddleWare,
  // validationMiddleWare(check("email").isEmail()),
  async (req, res, next) => {
    const id = req.patient.id;
    const { name, age, gender, appointment, diagnosis, drName } = req.body;

    const patient = await Patient.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          age,
          gender,
          appointment,
          diagnosis,
          drName,
        },
      },
      {
        new: true,
        runValidators: true,
        omitUndefined: true,
      }
    );
    res.status(200).json(patient);
  }
);

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  const patient = await Patient.findByIdAndDelete(id);
  res.status(200).json(patient);
});

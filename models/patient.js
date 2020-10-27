var mongoose = require("mongoose");
const _ = require("lodash");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    appointment: {
      type: String,
      required: true,
    },
    diagnosis: {
      type: String,
    },
    drName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc) => {
        return _.pick(doc, [
          "id",
          "name",
          "age",
          "gender",
          "appointment",
          "diagnosis",
          "drName",
        ]);
      },
    },
  }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;

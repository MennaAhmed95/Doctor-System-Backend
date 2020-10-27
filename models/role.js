const mongoose = require("mongoose")
const _ = require("lodash");
const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (doc) => {
            return _.pick(doc, [
                "id",
                "name"
            ]);
        },
    },
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role
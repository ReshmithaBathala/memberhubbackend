const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  contactDetails: String,
  membershipStatus: String,
  renewalDate: Date,
  group: String,
});

module.exports = mongoose.model("Member", memberSchema);

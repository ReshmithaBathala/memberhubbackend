const express = require("express");
const mongoose = require("mongoose");
const Member = require("../models/Member");
const router = express.Router();

// Create a member
router.post("/", async (req, res) => {
  const member = new Member(req.body);
  await member.save();
  res.send(member);
});

// Get all members
router.get("/", async (req, res) => {
  const members = await Member.find();
  res.send(members);
});

// Update a member
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, contactDetails, membershipStatus, renewalDate, group } =
    req.body;

  // Check if the provided ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid member ID" });
  }

  try {
    const updatedMember = await Member.findByIdAndUpdate(
      id,
      { name, contactDetails, membershipStatus, renewalDate, group },
      { new: true, runValidators: true }
    );

    if (!updatedMember) {
      return res.status(404).send({ message: "Member not found" });
    }

    res.send(updatedMember);
  } catch (error) {
    res.status(500).send({ message: "Error updating member", error });
  }
});

// Delete a member
router.delete("/:id", async (req, res) => {
  await Member.findByIdAndDelete(req.params.id);
  res.send({ message: "Member deleted" });
});

module.exports = router;

const mongoose = require("mongoose");
const Member = require("./models/Member");
const User = require("./models/User");

const mongoURI = "mongodb://localhost:27017/memberhub";

const sampleMembers = [
  {
    name: "Preethi",
    contactDetails: "preethi@example.com",
    membershipStatus: "Active",
    renewalDate: new Date("2023-12-31"),
    group: "Gold",
  },
  {
    name: "Mary",
    contactDetails: "mary@example.com",
    membershipStatus: "Expired",
    renewalDate: new Date("2022-05-20"),
    group: "Silver",
  },
];

const sampleUsers = [
  {
    username: "admin",
    password: "$2a$10$zP/tULuIjK7F6VpOHl2HfeJ4ZsnAwMnERnuU9RC7K4NFD/9QPlEAG", // bcrypt hash for 'password'
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");

    await Member.deleteMany({});
    await Member.insertMany(sampleMembers);
    console.log("Sample members inserted");

    await User.deleteMany({});
    await User.insertMany(sampleUsers);
    console.log("Sample users inserted");

    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.disconnect();
  }
};

seedDatabase();

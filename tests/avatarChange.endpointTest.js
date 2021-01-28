const jwt = require("jsonwebtoken");

const serverStarter = require("../src/serverStarter");
const userModel = require("../src/models/UserModel");
const mongoose = require("mongoose");

describe("приемочные тесты для ендпоинта обновления аватарок", () => {
  before(async () => {
    await serverStarter();
  });

  after(async () => {
    mongoose.disconnect();
    process.exit(0);
  });
});

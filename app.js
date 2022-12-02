const addDays = require("date-fns/addDays");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const todays = addDays(new Date(), 100);
  response.send(
    `${todays.getDate()}/${todays.getMonth() + 1}/${todays.getFullYear()}`
  );
});

module.exports = app;

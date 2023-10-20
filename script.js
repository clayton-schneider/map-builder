const { time } = require("console");
const dfd = require("danfojs-node");
const fs = require("fs");

function main() {
  const states = [];
  dfd
    .readCSV("data.csv", {
      index: [
        "States",
        "Changes",
        "Minumum Working Age",
        "Minumum Hazardous Working Age",
        "In Session Daily Hours",
        "In Session Weekly Hours",
        "In Session Working Hours",
        "Summer Max Daily Hours",
        "Summer Max Weekly Hours",
        "Summer Working Time",
        "Breaks",
        "Weekly Limit",
        "Proof Of Age",
        "Work Permit",
        "Regulated Hours",
      ],
    })
    .then((df) => {
      // df.iloc({ rows: [0], columns: [0] }).print();
      // Loop through the width of the df
      for (let i = 0; i < df.shape[1]; i++) {
        const state = {};
        state.html = "";
        state.name = df.columns[i];

        handleResponse(
          state,
          df.iloc({ rows: [0], columns: [i] }).values[0][0]
        );

        handleMinWorkingAge(
          state,
          df.iloc({ rows: [1], columns: [i] }).values[0][0]
        );

        handleMinHazardAge(
          state,
          df.iloc({ rows: [2], columns: [i] }).values[0][0]
        );

        handleInSession(state, df.iloc({ rows: ["3:6"], columns: [i] }).values);

        handleSummer(state, df.iloc({ rows: ["6:9"], columns: [i] }).values);

        handleFacts(state, df.iloc({ rows: ["9:"], columns: [i] }).values);

        states.push(state);
      }

      const out = JSON.stringify(states);
      fs.writeFile("output.json", out, "utf8", (error) => {
        if (error) {
          console.log("error");
          throw error;
        }

        console.log("data written correctly");
      });
    })
    .catch((err) => console.log(err));
}

main();

// CASE 0
function handleResponse(state, input) {
  if (input) {
    state.color = "#ffdd00";
    state.html = state.html + `<hr><strong>${input}</strong><hr>`;
  } else {
    state.color = "grey";
  }
}

// CASE 1
function handleMinWorkingAge(state, input) {
  let inputStr = "";
  if (typeof input == "string") {
    inputStr = `Worse: ${input}`;
  } else if (input == 14) {
    inputStr = `Consistent: 14`;
  } else if (input < 14) {
    inputStr = `Worse: ${input}`;
  } else {
    console.log(`There was an error with ${state.name} in handleMinWorkingAge`);
  }
  state.html =
    state.html +
    `<div><strong>Minimum working age (14)</strong><ul><li>${inputStr}</li></ul></div>`;
}

function handleMinHazardAge(state, input) {
  let inputStr = "";
  if (typeof input == "string") {
    inputStr = `Worse: ${input}`;
  } else if (input == 18) {
    inputStr = `Consistent: 18`;
  } else if (input < 18) {
    inputStr = `Worse: ${input}`;
  } else {
    console.log(`There was an error with ${state.name} in handleMinHazardAge`);
  }
  state.html =
    state.html +
    `<div><strong>Minimum hazardous working age (18)</strong><ul><li>${inputStr}</li></ul></div>`;
}

function handleInSession(state, input) {
  // better | consistent | worse
  let rating = "Consistent";

  let dailyStr = "";
  if (input[0][0] == null) {
  } else if (typeof input[0][0] == "string") {
    rating = "Worse";
    dailyStr = `<div><em>Max hours per school day (3)</em><ul><li>${input[0][0]}</li></ul></div>`;
  } else {
    console.log(
      `There was an error setting in session daily hours for: ${state.name}`
    );
  }

  let weeklyStr = "";
  if (input[1][0] == null) {
  } else if (typeof input[1][0] == "string") {
    rating = "Worse";
    weeklyStr = `<div><em>Max hours per school day (18)</em><ul><li>${input[1][0]}</li></ul></div>`;
  } else {
    console.log(
      `There was an error setting in session weekly hours for: ${state.name}`
    );
  }

  let timeStr = "";
  if (input[2][0] == null) {
  } else if (typeof input[2][0] == "string") {
    rating = "Worse";
    timeStr = `<div><em>Working time (start at 7 AM end at 7 PM)</em><ul><li>${input[2][0]}</li></ul></div>`;
  } else {
    console.log(
      `There was an error setting in session working time for: ${state.name}`
    );
  }

  state.html =
    state.html +
    `<div><strong>Working hours when school is in session (14-15)</strong><ul><li>${rating}</li></ul>${dailyStr}${weeklyStr}${timeStr}</div>`;
}
function handleSummer(state, input) {
  // better | consistent | worse
  let rating = "Consistent";
  const maxPerDay = 8;
  const maxPerWeek = 40;

  let dailyStr = "";
  if (input[0][0] == null) {
  } else if (typeof input[0][0] == "string") {
    rating = "Worse";
    dailyStr = `<div><em>Max hours per school day (8)</em><ul><li>${input[0][0]}</li></ul></div>`;
  } else {
    console.log(
      `There was an error setting in session daily hours for: ${state.name}`
    );
  }

  let weeklyStr = "";
  if (input[1][0] == null) {
  } else if (typeof input[1][0] == "string") {
    rating = "Worse";
    weeklyStr = `<div><em>Max hours per school day (40)</em><ul><li>${input[1][0]}</li></ul></div>`;
  } else {
    console.log(
      `There was an error setting in session weekly hours for: ${state.name}`
    );
  }

  let timeStr = "";
  if (input[2][0] == null) {
  } else if (typeof input[2][0] == "string") {
    rating = "Worse";
    timeStr = `<div><em>Working time (start at 7 AM end at 9 PM)</em><ul><li>${input[2][0]}</li></ul></div>`;
  } else {
    console.log(
      `There was an error setting in session working time for: ${state.name}`
    );
  }

  state.html =
    state.html +
    `<div><strong>Working hours June 1st - Labor Day Weekend (14-15)</strong><ul><li>${rating}</li></ul>${dailyStr}${weeklyStr}${timeStr}</div>`;
}

function handleFacts(state, input) {
  const breaks = `<div><em>Do they get breaks?</em><ul><li>${input[0][0]}</li></ul></div>`;
  const limit = `<div><em>Limit no. days/week a minor can work?</em><ul><li>${input[1][0]}</li></ul></div>`;
  const proof = `<div><em>Proof of age required?</em><ul><li>${input[2][0]}</li></ul><div>`;
  const permit = `<div><em>Work permit required?</em><ul><li>${input[3][0]}</li></ul></div>`;
  const regulated = `<div><em>Hours regulated for 16-17 year olds?</em><ul><li>${input[4][0]}</li></ul></div>`;

  state.html =
    state.html +
    `<strong>Other state requirements</strong><br><br>${breaks}${limit}${proof}${permit}${regulated}`;
}

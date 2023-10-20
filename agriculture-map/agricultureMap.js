const fs = require("fs");
const dfd = require("danfojs-node");

const states = [
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
  { name: "Colorado", abbreviation: "CO" },
  { name: "Connecticut", abbreviation: "CT" },
  { name: "Delaware", abbreviation: "DE" },
  { name: "Florida", abbreviation: "FL" },
  { name: "Georgia", abbreviation: "GA" },
  { name: "Hawaii", abbreviation: "HI" },
  { name: "Idaho", abbreviation: "ID" },
  { name: "Illinois", abbreviation: "IL" },
  { name: "Indiana", abbreviation: "IN" },
  { name: "Iowa", abbreviation: "IA" },
  { name: "Kansas", abbreviation: "KS" },
  { name: "Kentucky", abbreviation: "KY" },
  { name: "Louisiana", abbreviation: "LA" },
  { name: "Maine", abbreviation: "ME" },
  { name: "Maryland", abbreviation: "MD" },
  { name: "Massachusetts", abbreviation: "MA" },
  { name: "Michigan", abbreviation: "MI" },
  { name: "Minnesota", abbreviation: "MN" },
  { name: "Mississippi", abbreviation: "MS" },
  { name: "Missouri", abbreviation: "MO" },
  { name: "Montana", abbreviation: "MT" },
  { name: "Nebraska", abbreviation: "NE" },
  { name: "Nevada", abbreviation: "NV" },
  { name: "New Hampshire", abbreviation: "NH" },
  { name: "New Jersey", abbreviation: "NJ" },
  { name: "New Mexico", abbreviation: "NM" },
  { name: "New York", abbreviation: "NY" },
  { name: "North Carolina", abbreviation: "NC" },
  { name: "North Dakota", abbreviation: "ND" },
  { name: "Ohio", abbreviation: "OH" },
  { name: "Oklahoma", abbreviation: "OK" },
  { name: "Oregon", abbreviation: "OR" },
  { name: "Pennsylvania", abbreviation: "PA" },
  { name: "Rhode Island", abbreviation: "RI" },
  { name: "South Carolina", abbreviation: "SC" },
  { name: "South Dakota", abbreviation: "SD" },
  { name: "Tennessee", abbreviation: "TN" },
  { name: "Texas", abbreviation: "TX" },
  { name: "Utah", abbreviation: "UT" },
  { name: "Vermont", abbreviation: "VT" },
  { name: "Virginia", abbreviation: "VA" },
  { name: "Washington", abbreviation: "WA" },
  { name: "West Virginia", abbreviation: "WV" },
  { name: "Wisconsin", abbreviation: "WI" },
  { name: "Wyoming", abbreviation: "WY" },
];

function main() {
  dfd
    .readCSV("cl-map.csv", {})
    .then((df) => {
      const output = {};
      for (let i = 0; i < states.length; i++) {
        const stateName = states[i].name.trim();
        const stateInput = df.loc({ columns: [states[i].name] }).values;

        // build state
        const state = new State(stateName, stateInput);
        state.setName();
        state.setDescription();
        // console.log(state.output);

        // build output
        output[states[i].abbreviation] = state.output;
      }

      const out = JSON.stringify(output);
      fs.writeFile("output.json", out, "utf8", (error) => {
        if (error) {
          console.log("error");
          throw error;
        }

        console.log("data written correctly");
      });
      console.log(output);
    })
    .catch((err) => console.log(err));
}

main();

class State {
  constructor(name, stateData) {
    this.name = name;
    this.input = stateData;
    this.output = {};
  }

  setName() {
    this.output.name = this.name.toUpperCase();
  }

  setDescription() {
    this.output.description = "<br>";
    // check to set as a red state
    if (this.input[0][0]) {
      this.output.color = "#000000";
      this.output.hover_color = "#FFFFFF";
    } else {
      this.output.color = "#494947";
    }

    // add notes if there and set to yellow
    if (this.input[1][0]) {
      this.output.description = `<hr><strong>${this.input[1][0]}</strong><hr>`;
      this.output.color = "#FFDD00";
      this.output.hover_color = "#000000";
    }

    // set exemption
    this.output.description =
      this.output.description +
      `<div><strong>Is agricultural child labor exempt from state labor laws?</strong><ul><li>${
        this.input[2][0] == null ? "No" : this.input[2][0]
      }</ul></li></div>`;

    // set minimum age standards
    this.output.description =
      this.output.description +
      `<div><strong>Minimum age standards OUTSIDE of school hours</strong>` +
      `<ul><li>${this.input[3][0]}</ul></li>` +
      `<div><em>Minimum age to work with parental consent (12)</em><ul><li>${this.input[4][0]}</ul></li></div>` +
      `<div><em>Minimum age to work without parental consent (14)</em><ul><li>${this.input[5][0]}</ul></li></div>` +
      `<div><em>Minimum age to work with parents (12)</em><ul><li>${this.input[6][0]}</ul></li></div>` +
      `<div><em>Are any farms exempt from state law?</em><ul><li>${this.input[7][0]}</ul></li></div>` +
      "</div>";

    // set min age DURING school hours
    this.output.description =
      this.output.description +
      `<div><strong>Minimum age standards DURING school hours</strong>` +
      `<ul><li>${this.input[8][0]}</ul></li>` +
      `<div><em>Minimum age to work during school hours (16)</em><ul><li>${this.input[9][0]}</ul></li></div>` +
      `<div><em>Minimum age to work during school hours on a farm owned by the child's family (0)</em><ul><li>${this.input[10][0]}</ul></li></div>` +
      "</div>";

    // set min age for hazards
    this.output.description =
      this.output.description +
      `<div><strong>Minimum age standards to do hazardous agricultural work</strong>` +
      `<ul><li>${this.input[11][0]}</ul></li>` +
      `<div><em>Minimum age for hazardous agriculture work (16, or 14 with certification)</em><ul><li>${this.input[12][0]}</ul></li></div>` +
      `<div><em>Minimum age for hazardous agriculture work on a farm owned by the child's family (0)</em><ul><li>${this.input[13][0]}</ul></li></div>` +
      "</div>";

    // set limitations on hours
    this.output.description =
      this.output.description +
      `<div><strong>Limitations on hours</strong>` +
      `<ul><li>${this.input[14][0]}</ul></li>` +
      `<div><em>Maximum hours for children below 16 when school is in session? (Agriculture has no limitations, non-agriculture is 3 per day/18 per week)</em><ul><li>${this.input[15][0]}</ul></li></div>` +
      `<div><em>Maximum hours for children below 16 June 1-Labor Day? (Agriculture has no limitations, non-agriculture is 8 per day/40 per week)</em><ul><li>${this.input[17][0]}</ul></li></div>` +
      "</div>";

    // set state requirements
    this.output.description =
      this.output.description +
      `<div><strong>Other state requirements</strong>` +
      `<div><em>Do they include breaks?</em><ul><li>${this.input[19][0]}</ul></li></div>` +
      `<div><em>Limit no. days/week a minor can work?</em><ul><li>${this.input[20][0]}</ul></li></div>` +
      `<div><em>Proof of age required?</em><ul><li>${this.input[21][0]}</ul></li></div>` +
      `<div><em>Work permit required?</em><ul><li>${this.input[22][0]}</ul></li></div>` +
      `<div><em>Is there a heat stress law?</em><ul><li>${this.input[23][0]}</ul></li></div>` +
      `<div><em>Is there a tobacco ban?</em><ul><li>${this.input[24][0]}</ul></li></div>` +
      `<div><em>Is there a pesticide ban for children 16-17?</em><ul><li>${this.input[25][0]}</ul></li></div>` +
      "</div>";

    // set other notes
    if (this.input[26][0]) {
      this.output.description =
        this.output.description +
        `<strong>Other Notes</strong>` +
        `<hr><p>${this.input[26][0]}</p><hr>`;
    }
  }
}

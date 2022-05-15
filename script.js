const fs = require("fs");
const yaml = require("js-yaml");

const inDir = "./data-in/";

let files = fs.readdirSync(inDir);

let count = 0;


let scores = []

files.forEach((file) => {
  let data = yaml.load(fs.readFileSync(inDir + file, "utf8"));
  
  if (data == undefined) return;

  scores.push({
    username: data.Username,
    kills: data.Kills
  })

  count++;
});

let sorted = scores.sort((a, b) => b.kills - a.kills)

console.log(sorted.map((v, i) => `${s(i + 1)} - ${v.kills} | ${v.username}`).join("\n"));

function s(v) {

  return v < 10 ? `0${v}` : v.toString()

}
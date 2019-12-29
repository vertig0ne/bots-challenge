// Lots of dirty code here :-)
import fs from "fs";
import path from "path";

const firstNames = path.join("data", "first-names.txt");
const oliverTwist = path.join("data", "oliver-twist.txt");
const twist = fs.readFileSync(oliverTwist).toString();

export const parseFirstNames = () => {
  const names = fs.readFileSync(firstNames).toString().split("\r");
  return names;
};

export const occurances = (name: string, overlap: boolean) => {
  if (name.length <= 0) { return (twist.length + 1); }
  let n = 0;
  let pos = 0;
  const step = overlap ? 1 : name.length;

  while (true) {
    pos = twist.indexOf(name, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else { break; }
  }
  return n;
};

export const parse = () => {
  const names = parseFirstNames();
  const res: { [index: string]: any } = {};

  names.forEach((name) => {
    res[name] = occurances(name, false);
  });

  const a = Object
    .entries(res)
    .sort()
    .reduce((sortedObj, [k, v]) => {
      return ({
        ...sortedObj,
        [k]: v
      });
    }, {});

  return a;
};

export default { parse, occurances };

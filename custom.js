"use strict";

let string =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (let item of string.split("+")) {
  let [type, from, to, time] = item.split(";");

  const shortCut = (slices) => slices.slice(0, 3).toUpperCase();

  console.log(
    `${type.startsWith("_Delayed") ? "🔴" : ""} ${type
      .replaceAll("_", " ")
      .trim()} from ${shortCut(from)} to ${shortCut(to)
      .slice(0, 3)
      .toUpperCase()} (${time.replace(":", "h")})`.padStart(44)
  );
}

// 2nd Lazy Way to Get Same OutPut //

// for (let i = 0; i < string.length; i++) {
//   string[i] = string[i].split(";");
//   string[i][0] = string[i][0].replaceAll("_", " ").trim();
//   string[i][1] = string[i][1].slice(0, 3).toUpperCase();
//   string[i][2] = string[i][2].slice(0, 3).toUpperCase();
//   string[i][3] = string[i][3].replace(":", "h");

//   console.log(
//     `${string[i][0].includes("Delayed") ? "🔴" : ""} ${string[i][0]} from ${
//       string[i][1]
//     } to ${string[i][2]} (${string[i][3]})`.padStart(45, " ")
//   );
// }

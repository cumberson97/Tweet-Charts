/* const fs = require("fs")
const parser = require("csv-parser") */
import * as D3 from "d3"

var res = [];

export function test() {
    res = D3.csv("C:/Users/liat1/Desktop/Projects 2022/Tweet Charts/src/worldcities.csv")
        /* fs.createReadStream("C:/Users/liat1/Desktop/Projects 2022/Tweet Charts/src/worldcities.csv").pipe(parser({})).on("data", (data) => res.push(data)).on("end", () => {
            //console.log(res)
        }) */

    console.log(res);
}
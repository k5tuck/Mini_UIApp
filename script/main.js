// Importing Modules
import ajax from "ajax.js"
import {getElements, makeElements} from "elements.js"
// Public API's
let url = "reports.xml?id=155&type=anime&nlist=all"

// Importing Data from API
ajax(url, (data) => {
    console.log(data)
})

// Make Card and Appending to Body
let b = getElements("body");
let container = makeElements("div", {"border: solid 1px black"})
b.append(container)
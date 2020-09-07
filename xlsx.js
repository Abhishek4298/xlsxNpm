var xlsx = require("xlsx");

var wb = xlsx.readFile("traineeRecord.xlsx");

var wSheet = wb.Sheets["Sheet1"];

let data = xlsx.utils.sheet_to_json(wSheet);

const newData = data.map((element) => {
	return `${element.traineeName} with technology name ${element.Technology}`;
})

console.log("Trainee who has company laptop with their Technology name", newData);
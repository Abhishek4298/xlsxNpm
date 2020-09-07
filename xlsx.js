const xlsx = require("xlsx");

const wb = xlsx.readFile("traineeRecord.xlsx");

const wSheet = wb.Sheets["Sheet1"];

let data = xlsx.utils.sheet_to_json(wSheet);

const newData = data.map((element) => {
	return `${element.traineeName} with technology name ${element.Technology}`;
})

console.log("Trainee who has company laptop with their Technology name", newData);
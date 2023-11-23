type ValidAmount = "empty" | number
// data structure of a warehouse with clothes

interface ClothesWarehouse {
	jackets: ValidAmount;
	hats: ValidAmount;
	socks: ValidAmount;
	pants: ValidAmount;
}

// data structure of a warehouse with stationery

interface StationeryWarehouse {
	scissors: ValidAmount;
	paper: "empty" | boolean;
}

// data structure of a warehouse with household appliances

interface AppliancesWarehouse {
	dishwashers: ValidAmount;
	cookers: ValidAmount;
	mixers: ValidAmount;
}

// general data structure, inherits all data from the three above
// + adds its own

interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

// // the main object with all the data should fit the Total War house format

const totalData: TotalWarehouse = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: false,
	date: new Date()
};

// Implement a function that takes in the main totalData object of the desired format
// and always returns a string
// The function should filter the data from the object and leave only those product names that have the value "empty"
// and put them in this string. If there are no such products, another line is returned (see below)

// // With this totalData object, the string will look like:
// "We need these items: hats, socks, cookers"
// Products separated by a comma, it should not be at the end. There is a space after the colon, there is no space at the end of the line.

function printReport(data: TotalWarehouse) {
	const filteredData: string = Object.entries(data)
		.filter((item) => item[1] === "empty")
		.reduce((res, item) => `${res} ${item[0]},`, "");

	if(filteredData){
		return `We need this items: ${filteredData.slice(0, -1).trim()}`;
	}
	else{
		return "Everything fine";
	}
}
console.log(printReport(totalData));

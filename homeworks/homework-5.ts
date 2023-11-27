
// TYPE name of the animals
type Animal = "cat" | "dog" | "bird";

// INETRFACE data animals 
interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: boolean;
}

interface AvailableAnimalData extends AnimalData {
  location: string;
  age?: number;
}

interface NotAvailableAnimalData {
  message: string;
  nextUpdateIn: Date
  
}

//INTERFACE responses
interface AvailableAnimalResponse {
  status: "available";
  data: AvailableAnimalData
}

interface NotAvailableAnimalResponse {
  status: "not available";
  data: NotAvailableAnimalData
}

const availableData: AvailableAnimalResponse = {
  status: "available",
  data: {
    animal: "cat",
    breed: "Bobtail",
    sterilized: true,
    location: "Ankara 2/7",
    age: 4
  }
} 

const notAvailableData: NotAvailableAnimalResponse = {
  status: "not available", 
  data: {
    message: "We did not find the animal",
    nextUpdateIn: new Date()
  }
}

type response = AvailableAnimalResponse | NotAvailableAnimalResponse;
// function isAvailable(data: response): data is AvailableAnimalResponse {
//   if(data.status === "available"){
//     return true
//   }
//   else {
//     return false
//   }
// }

function checkAnimalData(animal: AvailableAnimalResponse | NotAvailableAnimalResponse ): AvailableAnimalData | string  {
  switch (animal.status){
    case "available":
      return animal.data
      case "not available":
        return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
      }
      // if(isAvailable(animal)){
      //   return animal.data
      // }
      // else{
      // 	return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
      // }
}
console.log(checkAnimalData(availableData))
console.log(checkAnimalData(notAvailableData))
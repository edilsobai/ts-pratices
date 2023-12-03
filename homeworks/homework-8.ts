interface IPhone {
  company: string;
  number: number;
}
type PhoneCompanyType = IPhone["company"]

interface IMobilePhone extends IPhone {
  size: string;
  companyParthner: PhoneCompanyType;
  manufactured: Date;
}

const phones: IMobilePhone[] = [
  {
    company: "Nokia",
    number: 123232,
    size: "5.5",
    companyParthner: "MobileNokia",
    manufactured: new Date("2022-09-01")
  },
    {
    company: "Samsung",
    number: 28487198,
    size: "5.0",
    companyParthner: "SamNokia",
    manufactured: new Date("2021-11-05")
  },
    {
    company: "Apple",
    number: 203910,
    size: "5.7",
    companyParthner: "no data",
    manufactured: new Date("2022-05-12")
  },
]

interface IPhonesManufacturedAfterDate extends IMobilePhone {
  initialDate: string
}

type IPhoneInitialDate = IPhonesManufacturedAfterDate["initialDate"]
function filterPhonesByDate<Key extends keyof IMobilePhone>(
  phones: IMobilePhone[],
  key: Key,
  initial: IPhoneInitialDate
) {
  const manufacturedPhones = phones.map((phone) => phone.manufactured)
  // console.log(manufacturedPhones)
  const filteredPhones = manufacturedPhones.filter((manufactured) => manufactured.toISOString().split("T")[0] > initial)
  console.log(filteredPhones)
  // return filteredPhones
}

filterPhonesByDate(phones, "manufactured", "2022-01-01")
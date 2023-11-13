const currRate: string = "1.05"

const fetchCurr = (response: string): number => {
  const data = JSON.parse(response)
  return data
}

function transferSomToUsd(
  available: boolean,
  amount: number,
  comission: number  
): void {
  if(available) {
    const res = fetchCurr(currRate) * amount * comission
    console.log(res)
  }
  else{
    console.log("The exchange is not available now")
  }
}

transferSomToUsd(true, 50, 11.05)
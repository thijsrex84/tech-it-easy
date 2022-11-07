//Opdracht 4a

let tvName = inventory.map((nOfTv)=>{
    return nOfTv.brand + nOfTv.name + nOfTv.type
})




//Opdracht 4b

function toEuro(price){
    return `€${price},-`
}

console.log(toEuro(`23`))

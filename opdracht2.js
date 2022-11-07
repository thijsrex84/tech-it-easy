// opdracht 2a 33
let tvSold = 0
for (let i = 0; i <inventory.length; i++) {
    tvSold += inventory[i].sold
}
console.log(tvSold)
//Opdracht 2b
const soldtelevisions = document.getElementById("sold")
soldtelevisions.textContent =`Het aantal verkochte televisies ${tvSold}`
//Opdracht 2c 9
let tvBought = 0
for (let i = 0; i <inventory.length ; i++) {
    if (inventory[i].sold===inventory[i].originalStock){
        tvBought += inventory[i].sold
    }
}
console.log(tvBought)
//Opdracht 2d
const boughttelevisions = document.getElementById("bought")
boughttelevisions.textContent =`Het aantal ingekochte televisies ${tvBought}`
//Opdracht 2e 40
let actualStock = 0
for (let i = 0; i <inventory.length ; i++) {
    actualStock += (inventory[i].originalStock-inventory[i].sold)
}
console.log(actualStock)

const stock = document.getElementById("tobesold")
stock.textContent =`Het aantal televisies dat nog verkocht moet worden ${actualStock}`
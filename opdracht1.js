// opdracht 1A
let tvTypes = inventory.map((types) =>{
    return types.type
})
console.log(tvTypes)

//opdracht 1B
let soldOutTelevisions = inventory.filter((actualStock) =>{
    return actualStock.sold >= actualStock.originalStock
})
console.log(soldOutTelevisions)

//opdracht 1C
const ambiLightTvs = inventory.filter((alTv) =>{
    return alTv.options.ambiLight === true
})
console.log(ambiLightTvs)
//opdracht 1D
const sortedPrice = inventory.sort((a, b)=>{
    return a.price- b.price
})
console.log(sortedPrice)


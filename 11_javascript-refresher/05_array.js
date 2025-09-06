faveFoods = ["Sinigang", "Nilaga", "Tinola"]
faveFoods.push("tsinelas")
console.log(faveFoods)
faveFoods.shift()
console.log(faveFoods)

for (let i = 0; i < faveFoods.length; i++){
    console.log(faveFoods[i])
}
const iLike = faveFoods.map((food) => `i like ${food}`)

console.log(iLike)


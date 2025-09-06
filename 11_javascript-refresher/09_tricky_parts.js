console.log("== and === test")
console.log(5 == "5")
console.log(5 === "5")

const aVar = undefined

const bVar = null

console.log(aVar)
console.log(bVar)

const thirdTest = {

    name: "Matthew",

    myNameNormal: function(){
        console.log("This is a normal, ", this.name)

    },

    myNameArrow: () => {
        console.log("This is an arrow, ", this.name)  
    }


}

thirdTest.myNameNormal()
thirdTest.myNameArrow()

arrayA = [1,2,3,4,5]

arrayB = arrayA

arrayB.push(6)

console.log("Array A: ", arrayA)
console.log("Array B: ", arrayB)
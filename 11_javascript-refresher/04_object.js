const aboutMe = {
    name: "Choi",
    age: 20 ,
    course: "BSIS" ,
    introduce: function(){
        return console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.` )
    }
}

aboutMe.hobby = "kumain"

aboutMe.introduce()

console.log(aboutMe.hobby)
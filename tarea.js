/*const list = [
     { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Ruby' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'Ruby' },
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'Ruby' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'Ruby' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Europe', age: 35, language: 'Ruby' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 128, language: 'Ruby' },
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Rby' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Ruby' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
]

function languageTeam (language,list){
    let counter = 0
    list.forEach(function(item){
        if (item.language == language){
            counter ++
        }
    })
    fullTeam = counter === list.length 
    console.log(fullTeam)
} 
languageTeam ('Ruby', list)*/

//ejercicio 2
/*
function oldestOnes (list){
  const  listAge = list.map ((item) => item.age)
  const oldestAge = Math.max(...listAge)
  const oldest = list.filter((item) => item.age == oldestAge)
  console.log (oldest)
}

oldestOnes (list)
*/

//ejercicio 3

/*const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' },
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 860, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 17, language: 'Clojure' }
];

const userNameCreator = (list1) => {
    let d = new Date()
    let n = d.getFullYear()
    list1.map((item)=> item.username = `${item.firstName}${item.lastName}${n - item.age}`)
    console.log(list1)
}
userNameCreator(list1)*/





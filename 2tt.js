//ejercicio 1
/*class Heroe {
    constructor(nombre, posición, vida, daño, experiencia){
        function nameVerifier (nombre) {
            if (nombre ===''){
                return 'Héroe'
            }else{
                return  nombre
            }}
        this.heroName = nameVerifier (nombre)
        this.heroPos = posición,
        this.heroHP = vida,
        this.heroHit = daño,
        this.heroXP = experiencia
        
    } 
    
}

const hero1 = new Heroe ('jamesbond', 'London', 1007, 993, 7273)
console.log (hero1)*/


//ejercicio 2

/*const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Europe', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  
function filtroEuropa (array) {
    let europeans = array.filter(function(item){
        return item.continent == 'Europe'
    })
    console.log(europeans.length,'europeos atendieron a la conferecia')
}
  

filtroEuropa (list)*/

//ejercicio 3

/*const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Europe', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

  function greeting(array){
      const greetingList = array.map(function(item){
          item.greeting = 'hi '+ item.firstName + ', and welcome to de conference.';
          return item;
      })
      console.log (greetingList)
  }

  greeting(list)*/


  //ejercicio 5
/*
  const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Europe', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

  function filtroPorLenguaje (array,language){
    const found = array.find(function(item){
        return item.language == language
    })
    if (found != undefined){
        console.log('true')
    }else{
        console.log('false')
    }
  }

  filtroPorLenguaje (list, 'HTML')*/


  //ejercicio 6

  const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Europe', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  function filtroPorLenguaje2 (array,language){
    const found = array.find(function(item){
        return item.language == language
    })
    if (found != undefined){
        console.log(found.firstName+' from '+ found.country + ' was the first '+ language + ' developer in the conference')
    }else{
        console.log('There are no '+language+' developers in the conference')
    }
  }

filtroPorLenguaje2 (list, 'JavaScript'){
    list.
}
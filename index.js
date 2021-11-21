document.addEventListener('DOMContentLoaded', (e) => {
    //fetchKantoPokemon();
    e.preventDefault();
})


let randomArray = Array.from({length: 12}, () => Math.floor(Math.random() * 808) + 1);
// we need to be careful with array very rarely calculating 0, this doesn't grab any pokemon and makes it seem like app is taking forever to load/button isn't working

let button = document.querySelector("button")
let button2 = document.querySelector("#button-2")
let body = document.querySelector("body")
let ul = document.querySelector("ul")

 /*function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(allpokemon => console.log(allpokemon))
  }

  function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon); 
     })
    })
   }


   function fetchPokemonData(pokemon){
    let url = pokemon.url
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      console.log(pokeData)
      })
    } */

let getPokemon = () => {
    randomArray.map(x => 

    fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
            .then(response => response.json())
            .then(results => {
                let li = document.createElement("li")
                let p = document.createElement("p")
                let typeP1 = document.createElement("p")
                let typeP2 = document.createElement("p")
                let img = document.createElement("img")
                let abilityTab = document.createElement('p')

                ul.classList.add("pokemon-container"); 
                li.classList.add("pokemon"); 

                p.textContent = results.name
                img.src = results.sprites.front_default
                
                if (results.types.length == 1){
                    let pokeTypes = results.types[0].type.name
                    typeP1.textContent = pokeTypes
                    typeP2.textContent = " "

                } else if (results.types.length == 2) {
                    let pokeType1 = results.types[0].type.name
                    typeP1.textContent = pokeType1
                    let pokeType2 = results.types[1].type.name
                    typeP2.textContent = pokeType2
                }

                abilityTab.textContent = results.abilities[0].ability.name
                abilityTab.classList.add('hidden')

                //this will create the text on the card for the generated pokemon
                ul.appendChild(li).appendChild(p)
                ul.appendChild(li).appendChild(img)
                ul.appendChild(li).appendChild(typeP1)
                ul.appendChild(li).appendChild(typeP2)
                ul.appendChild(li).appendChild(abilityTab)

                img.addEventListener('mouseover', showAbility);
                img.addEventListener('mouseout', removeAbility);

                    function showAbility(){
                        abilityTab.classList.remove('hidden')
                    }

                    function removeAbility(){
                        abilityTab.classList.add('hidden')
                    }
                
                        
            })
    )}



 function clearPage(){
    document.body.innerHTML = ''
}

 function getShinyDefault(){
    randomArray.map(x => 

        fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
                .then(response => response.json())
                .then(results => {
                    let li = document.createElement("li")
                    let p = document.createElement("p")
                    let typeP1 = document.createElement("p")
                    let typeP2 = document.createElement("p")
                    let img = document.createElement("img")
                    var abilityTab = document.createElement('p')
    
                    ul.classList.add("pokemon-container"); 
                    li.classList.add("pokemon"); 
    
                    //Display Name
                    p.textContent = results.name
                    img.src = results.sprites.front_shiny
                    
    
                    //display types
                    if (results.types.length == 1){
                        let pokeTypes = results.types[0].type.name
                        typeP1.textContent = pokeTypes
                        typeP2.textContent = " "
    
                    } else if (results.types.length == 2) {
                        let pokeType1 = results.types[0].type.name
                        typeP1.textContent = pokeType1
                        let pokeType2 = results.types[1].type.name
                        typeP2.textContent = pokeType2
                    }
    
                    abilityTab.textContent = results.abilities[0].ability.name
                    abilityTab.classList.add('hidden')
                    function showAbility(){
                        abilityTab.classList.remove('hidden')
                    }

    
                    //this will create the text on the card for the generated pokemon
                    ul.appendChild(li).appendChild(p)
                    ul.appendChild(li).appendChild(img)
                    ul.appendChild(li).appendChild(typeP1)
                    ul.appendChild(li).appendChild(typeP2)
                    ul.appendChild(li).appendChild(abilityTab)


                    img.addEventListener('mouseover', showAbility);
                    img.addEventListener('mouseout', removeAbility);
    
                        function showAbility(){
                            abilityTab.classList.remove('hidden')
                        }
    
                        function removeAbility(){
                            abilityTab.classList.add('hidden')
                        }
                    
                            
                })
        )}



button.addEventListener("click", getPokemon)
button2.addEventListener("click", getShinyDefault)




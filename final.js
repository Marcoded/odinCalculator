// pour régler les pb de - - = +, tu n'affiche pas les opérateur sur l'écran



// a chaque fois que je click sur un opérator

// vérification si les curent and past value are populated 
//si OUI :
    //=>je fait le calcul et je sauve le résultat du calcul dans calculusResult
    // pastValue = calculus result
    // je reset mon current value
// =>si NON :
    //je copie la current value en past value, et je flush le display


// quand je clique sur un bouton
// => je sauve les button pressed dans current value
// attention à ne pas sauver l'opérateur précédent aussi quand tu prend la display value
//

// -

// left to handle
// Round number
// highlight selection of operator
// handle negative operator first


EqualNode = document.getElementById("equals")
operatorsNodesArr = Array.from(document.getElementsByClassName("operation")) // gets the nodes reference, and convert into array for ForEach to work
displayNode = document.getElementById("Display") // works // gets the reference of the Display
numbersNodeArr = Array.from(document.getElementsByClassName("number"))
clearNode = document.getElementById("clear") // works // gets the reference of the Display
symbolDivNode = document.getElementById("symbolDiv")
allBtnArr = Array.from(document.getElementsByClassName("HL"))


let pastValue = undefined
let currentValue = undefined
let operatorIndex = undefined
let userOperatorIndex = undefined
let pastUserOperatorIndex = undefined
let result = undefined

const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const divide = function(a,b) {
return a/b
}
const multiply = function(a,b) {
  return a*b
};

const operateIf = (operatorIndex,a,b)=> {
    console.log(a + '' +b);
    if (operatorIndex === 1) {
        console.log("i've chosen add")
        return    add(a,b)
    } else if (operatorIndex === 2) {
        console.log("i've chosen sub")
        return  subtract(a,b)
    } else if (operatorIndex===3) {
        console.log("i've chosen divide")
        return  divide(a,b)
        
    } else if (operatorIndex===4) {
        console.log("i've chosen multiply")
        return  multiply(a,b)
    } else {
        console.log("unknow operator or operator number given")
    }
}





const operatorNodesListener = () => 

{operatorsNodesArr.forEach(button => {
    
    button.addEventListener('click', (e) => {
        e.target.style.background = '#3d3d3d' 

                userOperatorIndex =button.dataset.operation  
                userOperatorIndex = parseInt(userOperatorIndex,10)
                console.log('%c user operator index is ' +userOperatorIndex, 'background: #222; color: #bada55')

// Start calculus 

            if (pastValue!==undefined && currentValue!==undefined &&userOperatorIndex!==undefined) {  // both value exist // operation start
                console.log("both value are populated")
                displayFlusher()
                
                console.log('%c Operation has started ', 'background: #222; color: #bada55')
                calculus()
                userOperatorIndex=undefined
                
                userOperatorIndex =button.dataset.operation  
                userOperatorIndex = parseInt(userOperatorIndex,10)
                
                
                

    // nested if for handling infitity

                    if(result===Infinity) {
                        displayNode.append("/0 ERROR")
                    } else { 
                    displayNode.append(result) // assign le result aux 2ème press de bouton
                    pastValue = result
                    console.log("past value is now result")  
                //result=undefined
                    //console.log("result is now undefined")   
                        }
// keep populating display
            } else if(pastValue===undefined){            // past value does not exist           
                console.log("both value are not populated, past value has been copied")
                
                
                pastValue=currentValue
                currentValue=undefined
                console.log("pas value is" +pastValue)
                userOperatorIndex =button.dataset.operation 
                userOperatorIndex = parseInt(userOperatorIndex,10) 
                displayFlusher() 
                symbolDivNode.append(button.dataset.symbol)
                
            }
     
  })
});}

operatorNodesListener()

const calculus = () => {
    result =operateIf(userOperatorIndex,pastValue,currentValue)
    
    console.log(" calculusresult is" + result);
}


const numberNodesListener = () => {  
    numbersNodeArr.forEach(numberButton => {
        
        numberButton.addEventListener('click', (e) => {
            // flush the display when the first number of the secong pair is entered :( if(userOperatorIndex!==undefined){displayFlusher()}
            // solution don't append the opeator to the display
            resultStateHandler()
          //  e.target.style.background = 'blue' // tester
          
            displayNode.append(numberButton.dataset.nombre) // append the nombre
            
            currentValue=Number(displayNode.innerText) // problem ici
            console.log("past value is " + pastValue +"current value is " + currentValue);
            
    
            })
        })
    }

    numberNodesListener()

    const displayFlusher =() => {
        console.log('%c flushing the display ', 'background: #222; color: #bada55')
        displayNode.innerText=""
    }

    const resultStateHandler = () =>{
        if (result!==undefined) {
            console.log("there were a result, flushing display");
            displayFlusher()
            result=undefined
        } else if (result===undefined) {
            console.log("there were no result");
        }
    }


    const allClear = () => {
        pastValue = undefined
        currentValue = undefined
        operatorIndex = undefined
        userOperatorIndex = undefined
        pastUserOperatorIndex = undefined
        result = undefined
        displayFlusher()
    }

        clearNode.addEventListener('click', (e) => {
        
      
        allClear()
        

        })


       
        EqualNode.addEventListener('click', (e) => {
        
            userOperatorIndex = parseInt(userOperatorIndex,10) 
            calculus()
            displayFlusher()
            console.log('%c Operation has started with the equal sign ', 'background: #222; color: #bada55')
            displayNode.append(result) 
            pastValue = result
            currentValue=undefined
            
            console.log("past value is now result")  

            
            
            })

      

        const symbolHighlight = () => {
            if (operatorIndex === 1) {
                console.log("i've chosen add")
                return    add(a,b)
            } else if (operatorIndex === 2) {
                console.log("i've chosen sub")
                return  subtract(a,b)
            } else if (operatorIndex===3) {
                console.log("i've chosen divide")
                return  divide(a,b)
                
            } else if (operatorIndex===4) {
                console.log("i've chosen multiply")
                return  multiply(a,b)
            } else {
                console.log("unknow operator or operator number given")
            }

        }

        const buttonHover = () => {  
            allBtnArr.forEach(button => {
                
                button.addEventListener('mouseover', (e) => {
                    e.target.classList.add("highlight");})
                    button.addEventListener('mouseout', (e) => {
                        e.target.classList.remove("highlight");})
                })
            }
            buttonHover()

            
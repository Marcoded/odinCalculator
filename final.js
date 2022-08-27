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



// left to handle
// => divide by zero


EqualNode = document.getElementById("equals")
operatorsNodesArr = Array.from(document.getElementsByClassName("operation")) // gets the nodes reference, and convert into array for ForEach to work
displayNode = document.getElementById("Display") // works // gets the reference of the Display
numbersNodeArr = Array.from(document.getElementsByClassName("number"))
clearNode = document.getElementById("clear") // works // gets the reference of the Display
symbolDivNode = document.getElementById("symbolDiv")


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
        //e.target.style.background = '#3d3d3d' 

        

            if (pastValue!==undefined&&currentValue!==undefined) {  // both value exist // operation start
                console.log("both value are populated")
                displayFlusher()
                calculus()
                userOperatorIndex=undefined
                userOperatorIndex =button.dataset.operation  
                userOperatorIndex = parseInt(userOperatorIndex,10)
                console.log("assigning an index AFTER the operation");


                    if(result===Infinity) {
                        displayNode.append("/0 ERROR")
                    } else { 
                    displayNode.append(result) // assign le result aux 2ème press de bouton
                    pastValue = result
                    console.log("past value is now result")  
                //result=undefined
                    //console.log("result is now undefined")   
                        }

            } else if(pastValue===undefined){            // past value does not exist           
                console.log("both value are not populated, past value has been copied")
                pastValue=currentValue
                currentValue=undefined
                console.log("pas value is" +pastValue)
                userOperatorIndex =button.dataset.operation 
                userOperatorIndex = parseInt(userOperatorIndex,10)
                console.log("assignign an index");
                displayFlusher()
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


        const savedOperator = () => {

        }
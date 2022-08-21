

const operate = function(operator,a,b) {
switch (operator) {
    case (operator==="+"):
        return add(a,b)

    case (operator==="-"):
        return subtract(a,b)

    case (operator==="/"):
        return divide(a,b)

    case (operator==="*"):
        return multiply(a,b)
        
    default:
        break;
}
}

let display = document.getElementsByClassName("Display")
display.style.backgroundColor = "red"



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


console.log(multiply(2,5))
console.log(subtract(2,5))
console.log(divide(2,5))
console.log(add(2,5))


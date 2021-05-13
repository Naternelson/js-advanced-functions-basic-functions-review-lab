function wrapAdjective(flair = "*"){
    return function(adj = "special"){
        return "You are " + flair + adj + flair + "!" 
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

function saturdayFun(activity = "roller-skate"){
    return "This Saturday, I want to " + activity + "!"
}

function mondayWork(activity = "go to the office"){
    return "This Monday, I will " + activity + "."
}

const Calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
}

function actionApplyer(int=0, arr){
    if( !arr || arr.length == 0) return int
    for(let func of arr) {
        int = func(int)}
    return int
}
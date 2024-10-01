function saturdayFun(activity='roller-skate') {
    return "This Saturday, I want to " + activity + "!"
}
console.log (saturdayFun())
console.log (saturdayFun(activity='bathe my dog'))

function mondayWork (activity= 'go to the office') {
    return "This Monday, I will " + activity + '.'
}
mondayWork(activity='work from home')


function wrapAdjective(highlight='*') {
    return function (feeling= 'special'){
        return "You are " + highlight + feeling + highlight + "!"
    }
}
wrapAdjective("%")("a dedicated programmer")
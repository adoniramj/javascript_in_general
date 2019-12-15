let original_arr = [1,2,3,4,5]

let new_arr = original_arr.map(element => element*2)
console.log(new_arr)

function times_two(number) {
    return number*2 
}

function map(array, f) {
    let copy = []
    let original_data = 0
    let modified_data = 0
    for (let i = 0; i < array.length; i++) {
        original_data = array[i]
        modified_data = f(original_data)
        copy[i] = modified_data
    }
    return copy;
}

let new_arr2 = map(original_arr, times_two)

console.log(new_arr2)

let todoItems = [
            {action: 'Buy paper', done: false},
            {action: 'Change oil', done: false},
            {action: 'Buy a car', done: false}
           ]

let toModify = 'Buy a car'

// modify the last action to change done to true

todoItems = todoItems.map(item => item.action === toModify ? {...item, done: !item.done } : item )

console.log(todoItems)

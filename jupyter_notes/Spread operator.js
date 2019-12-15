let old_states = ['New York', 'Georgia']
let all_states = ['California', 'Oregon', ...old_states, 'Utah']
console.log(all_states)

let more_states = ['Texas', 'Arizona', 'New Mexico']

let total_states = [...all_states, ...more_states]
console.log(total_states)

let obj1 = {action: 'This is the first item', done: false}

obj1 = {...obj1, done: !obj1.done}



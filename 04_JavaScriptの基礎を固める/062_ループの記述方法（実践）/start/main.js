const todos = [
  {
      id: 1,
      title: 'Go to school',
      completed: true
  },
  {
      id: 2,
      title: 'Go to museum',
      completed: false
  },
  {
      id: 3,
      title: 'Go shopping!',
      completed: true
  }
]

for(let todo of todos) {
  
  if(todo.completed === true) {
      console.log(todo.title);
  }
  
}
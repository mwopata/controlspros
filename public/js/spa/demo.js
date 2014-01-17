var Todos = new Backbone.Collection();

Todos.add([
  { title: 'go to Belgium.', completed: false },
  { title: 'go to China.', completed: false },
  { title: 'go to Austria.', completed: true }
]);

// iterate over models in the collection
Todos.forEach(function(model){
  console.log(model.get('title'));
});
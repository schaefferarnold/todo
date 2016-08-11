function removeTodo (event) {
  var target = event.currentTarget;
  $(target).parent().remove();
}

$(function () {
  $('.todo-remove').on('click', removeTodo);
  $('.add-todo').on('click', function () {
    var newTodo = $('.todo').first().clone();
    newTodo.find('.todo-text').val('');
    newTodo.find('.todo-checkbox').prop('checked', false);
    newTodo.find('.todo-remove').on('click', removeTodo);
    newTodo.appendTo('.todo-list');

  });
  $('.todo-remove').on('click', removeTodo);
});

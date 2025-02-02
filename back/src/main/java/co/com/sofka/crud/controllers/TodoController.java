package co.com.sofka.crud.controllers;

import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.models.TodoList;
import co.com.sofka.crud.services.TodoListService;
import co.com.sofka.crud.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

  @Autowired
  private TodoListService todoListService;

  @Autowired
  private TodoService service;


  @GetMapping(value = "api/todos")
  public Iterable<Todo> list() {
    return service.list();
  }

  @PostMapping(value = "api/{list_id}/todo")
  public Todo save(@PathVariable(value = "list_id") Long listId, @RequestBody Todo todo) {
    TodoList list = this.todoListService.get(listId);
    todo.setList(list);
    return service.save(todo);
  }

  @PutMapping(value = "api/todo")
  public Todo update(@RequestBody Todo todo) {

    if (todo.getId() == null) {
      throw new RuntimeException("No existe el id para actualizar");
    }
    Todo oldTodo = service.get(todo.getId());
    if (todo.getName() != null) {
      oldTodo.setName(todo.getName());
    }

    if (todo.isCompleted() != null) {
      oldTodo.setCompleted(todo.isCompleted());
    }

    return service.save(oldTodo);
  }

  @DeleteMapping(value = "api/{id}/todo")
  public void delete(@PathVariable("id") Long id) {
    service.delete(id);
  }

  @GetMapping(value = "api/{id}/todo")
  public Todo get(@PathVariable("id") Long id) {
    return service.get(id);
  }

}

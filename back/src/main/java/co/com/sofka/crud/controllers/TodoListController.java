package co.com.sofka.crud.controllers;


import co.com.sofka.crud.models.TodoList;
import co.com.sofka.crud.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/list")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {
  @Autowired
  TodoListService service;

  @GetMapping()
  public Iterable<TodoList> list() {
    return service.list();
  }

  @PostMapping()
  public TodoList save(@RequestBody TodoList todoList) {
    return service.save(todoList);
  }

  @PutMapping()
  public TodoList update(@RequestBody TodoList todoList) {
    if (todoList.getId() != null) {
      return service.save(todoList);
    }
    throw new RuntimeException("No existe el id para actualziar");
  }

  @DeleteMapping(value = "/{id}")
  public void delete(@PathVariable("id") Long id) {
    service.delete(id);
  }

  @GetMapping(value = "/{id}")
  public TodoList get(@PathVariable("id") Long id) {
    return service.get(id);
  }


}

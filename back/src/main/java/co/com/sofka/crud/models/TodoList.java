package co.com.sofka.crud.models;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "todo_list")
public class TodoList {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true, nullable = false)
  private Long id;
  private String name;

//  @OneToMany(targetEntity = Todo.class)
//  @JoinColumn(name="list_id", nullable = false)
//  private List<Todo> todos;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


}

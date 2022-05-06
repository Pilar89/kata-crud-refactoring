package co.com.sofka.crud.models;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "todo")
public class Todo {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true, nullable = false)
  private Long id;
  private String name;
  private boolean completed;

  @ManyToOne(optional = false)
  @JoinColumn(name = "list_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  private TodoList list;

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

  public boolean isCompleted() {
    return completed;
  }

  public void setCompleted(boolean completed) {
    this.completed = completed;
  }

  public TodoList getList() {
    return list;
  }

  public void setList(TodoList list) {
    this.list = list;
  }
}

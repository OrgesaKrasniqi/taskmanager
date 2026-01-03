
enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High"
}

interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
}

//  Class TaskManager
class TaskManager {
  private tasks: Task[] = [];
  private currentId: number = 1;

  // Shto detyr t re
  addTask(title: string, description: string, priority: Priority): void {
    const newTask: Task = {
      id: this.currentId,
      title,
      description,
      priority,
      completed: false
    };

    this.tasks.push(newTask);
    this.currentId++;
  }

  // Fshije sipas id
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // Ndrysho statusin 
  toggleTaskStatus(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  // Shfaq krejt console
  printTasks(): void {
    console.log("===== TASK LIST =====");
    this.tasks.forEach(task => {
      console.log(`
ID: ${task.id}
Title: ${task.title}
Description: ${task.description}
Priority: ${task.priority}
Completed: ${task.completed ? "Yes" : "No"}
-----------------------
      `);
    });
  }
}

// Krijimi i TaskManager 
const manager = new TaskManager();

// 3 detyra të ndryshme
manager.addTask("Learn TypeScript", "Study enums, interfaces, classes", Priority.High);
manager.addTask("Do Homework", "Finish university assignment", Priority.Medium);
manager.addTask("Workout", "Go to the gym", Priority.Low);

// Ndrysho statusin e 1
manager.toggleTaskStatus(1);

// Fshi 2
manager.deleteTask(2);

// Shfaq krejt detyrat
manager.printTasks();

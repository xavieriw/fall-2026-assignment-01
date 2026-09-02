export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchTodoSafe(
  todoId: number,
): Promise<TodoItem | null> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    );

    if (response.status !== 200) {
      return null;
    }

    const data: TodoItem = await response.json();
    return data;
  } catch {
    return null;
  }
}

// @ts-ignore
import {ITodo} from '../types/todo.ts'

export function saveTools(todos:ITodo[]) {
  localStorage.setItem("todos", JSON.stringify(todos))
}

export function loadTodos():ITodo[]{
  return JSON.parse(localStorage.getItem("todos") || "[]")
}

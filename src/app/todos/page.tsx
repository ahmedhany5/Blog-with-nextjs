import { getTodos } from "@/db/todos"
import { TodoItem } from "@/components/TodoItem"

export default async function Page() {
    const todos = await getTodos()
    return (
        <>
            <h1 className="page-title">Todos</h1>
            <ul>
                {todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </>)
}

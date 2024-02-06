import { getTodos } from "@/api/todos"
import { TodoItem } from "@/components/TodoItem"

export default async function Page() {
    const todos = await getTodos()
    return (
        <>
            <h1 className="page-title">Todos</h1>
            <ul>
                {todos.map((todo: { id: string, title: string, completed: boolean }) => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </>)
}

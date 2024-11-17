import { json } from "@remix-run/node"
import { Form, useLoaderData } from "@remix-run/react"
import TodoList from "./components/ToDoList"

const todos =  [
    {
        id: 1,
        title: "Comprar Leche",
        completed: false
    },
    {
        id: 2,
        title: "Pasear al perro",
        completed: false
    },
    {
        id: 3,
        title: "Lavar los platos",
        completed: false
    }
]

export const action =async ({request}) => {
    const body = await request.formData();
    todos.push({
        id: todos.length +1,
        title: body.get("title"),
        completed: false
    });
    return todos;

}


export const loader = () => {
    return json(todos)

}
const Todos = () => {
    const todoList = useLoaderData()
   return <div>
    <TodoList todos={todoList}/>
    <Form method="post">
        <input type="text" name="title" />
        <button type="submit"> Crear un quehacer</button>

    </Form>
   </div>
}

export default Todos;
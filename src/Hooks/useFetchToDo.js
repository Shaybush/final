import axios from "axios";

const linkToAPI = "https://jsonplaceholder.typicode.com/todos"

export async function getData() {
    try{
        const { data } = await axios.get(linkToAPI); //put correct data
        data.forEach(element => {
            element.isDone = element.completed
            delete element.completed
        });
        return data.slice(0,50)
    }
    catch(err){
        console.log(err);
    }
}

export async function addNewTodo(todo){
    axios.post(linkToAPI,{
        userId: 11,
        title: todo.title,
        completed : todo.isDone
    })
}

export async function changeData(todo, index){
    axios.put(`${linkToAPI}/${index}`, {
        userId: todo.userId,
        id: index,
        title: todo.title,
        completed: todo.isDone
    })
}



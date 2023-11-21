import {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  {/**criando uma função para cuidar do submit do formulário */}
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    console.log(value, category);
    // adicionar todo
    addTodo(value, category);
    //limpar os campos do formulário
    setValue("");
    setCategory("");
  }

  return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>{/**esse evento é usado a cada vez que o formulário é enviado */}
            <input value={value} type="text" placeholder='Digite o título' 
              onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm
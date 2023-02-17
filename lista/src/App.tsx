
//Styles.css
  import './App.css';

//Hooks
  import { useState, useSyncExternalStore } from 'react';

//Componentes
  import { Footer } from './components/Footer';
  import { Header } from './components/Header';
  import { Modal } from './components/Modal';
  import { Form } from './components/TaskForm';
  import { List } from './components/TaskList';


//Interfaces // com essa interface a gente ja pode criar entidades neste  modelo
  import { ITask } from './interfaces/Task';

function App() {
      
      //1 - Começando com o meu array de tarefas ( estou criando um useState dizendo que vai ser um array de Itask e que vai começar como um array vazio)Itask é minha interface criada no arquivo interfaces
      //2 - Se eu estivesse utilizando somente o jsx eu nao precisaria dizer que é um array de Itask pq eu não precisaria tipar , so precisaria dizer que seria uma arrayVazio
      //3 - É uma boa pratica criar os metodos aqui e passar para o componente pai, como por exemplo criar a função de delete aqui
    

//Nossa lista de tarefas Hooks
    const [taskList , setTasklist] = useState<ITask[]>([]);
    const [taskToUpdate , setTaskToUpdate] = useState<ITask|null>(null)
  
//função de delete item da lista
    const deleteTask = (id: number) =>{
      setTasklist(
        taskList.filter(task =>{
          return task.id !== id;
        })
      )
    }
    
//Perceba que se eu usar o id eu posso pegar ele tanto aqui , tanto no componente que eu coloquei o id
  //Função para esconder o modal ao clicar na edição de tarefas
    const hideOrShowModal = (display:boolean) =>{
      const modal = document.querySelector("#modal")
      if(display){
      //Ao clicar no lapis(se for true vai mostrar o modal se não for , some o modal)
        modal!.classList.remove("hide")
      }
      else{
        modal!.classList.add("hide")
      }
    };

//Função de clicar no lapis, vai exibir o modal que é true
    const editTask = (task:ITask):void =>{
    hideOrShowModal(true);
    setTaskToUpdate(task)
    };

//Const update task que vai fazer a atualização de uma tarefa(A função de cima somente mostra o modal com a respectiva tarefa a ser atualizada)
    const updateTask = (id:number , title:string, difficulty: number) =>{
      const updatedTask:ITask = {id , title , difficulty}

      const updatedItems = taskList.map((task) =>{
        return task.id === updatedTask.id ? updatedTask : task
      })
      
      setTasklist(updatedItems)
      hideOrShowModal(false)
    }
  
  return (
    <div className="App">
      <Modal children={<Form btnText="Editar Tarefa" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>}
        />
      <Header />
        <main>
          <div>
            <h2>Escreva a sua tarefa e seu grau de dificuldade</h2>
            <Form btnText = "Criar tarefa" taskList={taskList} setTaskList={setTasklist} />
          </div>
          <div>
            <h2>Suas tarefas:</h2>
            <List taskList={taskList} handleDelete={deleteTask} handleEditTask={editTask}/>
          </div>
        </main>
    <Footer />
    </div>
  );
}

export default App;



//Perceba que o modal é uma childrem do form, por isso tudo que eu passar para ele eu posso passar diretamente para o form tbm
//Observação importante, eu tenho app.tsx para controlar tudo em relação as tarefas, ou seja , todas as funções são criadas aqui e passadas como props para os respectivos receptores das funções(Como funções de update, funções de adição de tarefas e entre outras)

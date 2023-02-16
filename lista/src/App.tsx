
//Styles.css
import { useState, useSyncExternalStore } from 'react';
import './App.css';

//Componentes

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Form } from './components/TaskForm';
import { List } from './components/TaskList';


//Interfaces // com essa interface a gente ja pode criar entidades neste  modelo
import { ITask } from './interfaces/Task';

function App() {
      //Começando com o meu array de tarefas ( estou criando um useState dizendo que vai ser um array de Itask e que vai começar como um array vazio)Itask é minha interface criada no arquivo interfaces
      //Se eu estivesse utilizando somente o jsx eu nao precisaria dizer que é um array de Itask pq eu não precisaria tipar , so precisaria dizer que seria uma arrayVazio
      //Nossa lista de tarefas
      //É uma boa pratica criar os metodos aqui e passar para o componente pai, como por exemplo criar a função de delete aqui
    
      const [taskList , setTasklist] = useState<ITask[]>([]);
  
    //função de delete item da lista
      const deleteTask = (id: number) =>{
        setTasklist(
          taskList.filter(task =>{
            return task.id !== id;
          })
        )
      }
  
  return (
    <div className="App">
      <Modal children={<Form btnText="Editar Tarefa" taskList={taskList}/>}
        />
      <Header />
      <main>
        <div>
          <h2>O que você vai fazer ?</h2>
          <Form btnText = "Criar tarefa" taskList={taskList} setTaskList={setTasklist}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <List taskList={taskList} handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;



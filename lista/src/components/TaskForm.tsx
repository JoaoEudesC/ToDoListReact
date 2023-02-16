import React from "react"
//Interface para tipar as props , possuo duas maneiras de importar bibiliotecas aqui pode ser pelo npm install ou adicionar o cdn no html
//isso serve tbm para bibiliotecas como bootstrap e material ui , que posso colar o cdn e o npm install (Posso utilizar o bootstrap normal e o bootstrap para react)

//Hooks
import  {useState, ChangeEvent, FormEvent, useEffect  } from"react"

//1 - useState => muda o estado dos elementos

//2 - ChangeEvent => para a gente poder alterar alguma coisa quando tiver um evento acontecendo na tela

//3 - FormEvent => para podermos submeter o nosso formulário

//4 - useEffect =>


//style css
import styles from "../style.css/Taskform.module.css"

//interfaces
import { ITask } from "../interfaces/Task"


interface Props{
        btnText:string
        taskList: ITask[]
        //Quer dizer que a gente está alterando o state de uma lista, ele tem que ser opcional para que eu possa enviar quando eu precisar
        setTaskList?:React.Dispatch<React.SetStateAction<ITask[]>>

}

export const Form = ({btnText , taskList , setTaskList}:Props) =>{
    //Uma maneira de tipar o useState sem ser de forma implicita.(pegando os estados dos elementos)
    const [id , setId] = useState<number>(0)
    const [title , setTitle ] = useState<string>("")
    const [difficult , setDifficult] = useState<number>(0)

    //Função de realização de inclusão de tarefas no sistema de envio de formulário(em uma função de envio de formulário eu posso tipar com o FormEvent e dizer que ele é um htmlFormElement)a função tem que ser de onSubmmit addtaskHanler é fução de submmit
    const addTaskHandler = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    //Criei um número aleatório para a gente poder se referenciar facilmente a função que a gente quer deletar ou editar
        const id = Math.floor(Math.random() * 1000)
    //Repare que eu tipei a newTask de acordo com a interface exportada da pasta interfaces
        const newTask:ITask = {id, title , difficult}

        setTaskList!([...taskList, newTask])

        setTitle("")
        setDifficult(0)
        console.log(taskList)

    }
    //Função de onchange nos inputs vai manuzear as alterações do input(nos evenetos de onchange que vá utilizar parametro, temos que tipar com o hook changeEvent e dizer que esse evento vai vir de um input html(HTMLInputElement))
        //Assim como numa função de onChange eu uso esta tipage do ChangeEvent
    const handlleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        //utilizando if através do name para bifurcar pq eu coloquei a mesma função nos dois inputs(eu poderia ter colocado uma função para cada input)
        if(e.target.name === "title"){
            setTitle(e.target.value)
        }
        else{
            setDifficult(Number(e.target.value))
        }
        
    }

    return(
        
            <form className={styles.form} onSubmit={addTaskHandler}>
                <div className={styles.input_container}>
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" placeholder="Título da tarefa" onChange={handlleChange} value={title}/>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="difficulty">Dificuldade:</label>
                    <input type="text" name="difficulty" placeholder="Dificuldade da tarefa"  onChange={handlleChange} value={difficult}/>
                </div>
                <input type="submit" value={btnText}  className={styles.formSubmit}/>
            </form>
        
    )
}
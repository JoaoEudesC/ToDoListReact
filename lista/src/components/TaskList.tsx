//Utilização de interface para tipar as props

//Css
import style from "../style.css/taskList.module.css"

//interfaces
import { ITask } from "../interfaces/Task"


//Repare na tipagem que eu faço para uma função que possui return que eu criei no app.tsx, assim eu tenho que tipar o mesmo parametro que eu passei para ela aqui e depois retornar void, se ela nao possuisse parametro lá eu não precisaria passar aqui
    interface Props{
        taskList: ITask[];
        handleDelete(id:number): void
    }


//Esta técnica de envolver o componente em uma tag vazia se chama "fragment" , estou utilizando abaixo
    //Repare na escrita da sintaxe para por uma condicional, eu posso utilizar o parenteses para dividir o if e o else e dentro de cada parenteses eu exibir a condicional do que irá acontecer ou não(é melhor para organização do código)
    //Repare bem na sintaxe do map eu criei uma condicional e em seguida coloquei um map dentro para so mostrar os icones de excluir e editar caso o meu array de tarefas seja maior que 0 , ou seja, tenha alguma tarefa cadastrada ( ou seja , vai criar um icone para cada uma das tarefas, visto que estou fazendo um map , que é um loop)
export const List = ({taskList , handleDelete}:Props) =>{
    return(
        <>
        {taskList.length > 0 ? (
                taskList.map((task) =>(
                    <div key={task.id} className={style.task}>
                        <div className={style.details}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficult}</p>
                        </div>
                        <div className={style.actions}>
                            <i className="fa-solid fa-pencil"></i>
                            <i className="fa-solid fa-trash" onClick={() =>{handleDelete(task.id)}}></i>
                        </div>
                    </div>
                ))
            ):(
                <p>Não há tarefas cadastradas</p>
            )}
        </>
    )
}




//Obs importante => repare como se passa uma função tipada como props temos que tipar o parametro na função e na interface
//Repare como se tipa um useState, é igual se tipa um array => const [item , setItem] = useState<number>() ou const [item , setItem] = useState<number>({div1 = "" , div2 = "" , div3 = "" vários states de uma só vez})
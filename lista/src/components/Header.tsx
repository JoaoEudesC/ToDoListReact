// Repare que eu possuo três maneiras de mexer no css através de diretamente no app.css ou no index.css , posso tambem utilizar o import de escopo global e posso utilizar o import através de modules que pode ser a partir de uma variavel como classe que nao vaza o escopo 
    //Eu utilizo interpolação igual quando eu uso um state para interpolar a classe para mudar a classe dinamicamente
import styles from '../style.css/Header.module.css';




export const Header = () =>{
    return(
        <header className={styles.Header}>
            <h1>React To do list</h1>
        </header>
        )
}
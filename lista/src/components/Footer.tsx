//O mesmo estilo de estilização que eu utilizei no header , eu irei utilizar no css do footer através de modulo
    //Note que uma boa pratica para estilizar elementos dentro de elementos pai com o modules é utilizar o style styleFooter.nomedaclasse + nome da outra classe ( como é  caso do span => .Footer span{estilo})
import styleFooter from "../style.css/Footer.module.css"






export const Footer = () =>{
    return(
        <footer className={styleFooter.Footer}>
            <p>
                <span className={styleFooter.Footerspan}>To do List</span>
            </p>
        </footer>
        

        
    )
}
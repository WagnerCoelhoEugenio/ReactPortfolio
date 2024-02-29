import styles from './Card4.module.css'
import Projeto4 from '../../Image/projects/Projeto4.svg'
import ButtonB from './ButtonB'
function Card4() {
    return (
        <div className={styles.Card4}>
            <p>PROJETO 4 <br /><br />


                React e Vite são duas tecnologias modernas amplamente utilizadas  <br /> no desenvolvimento web.  <br />React, uma biblioteca JavaScript mantida pelo Facebook, é conhecida<br /> por simplificar a criação de interfaces de usuário reativas.
                <ButtonB text='Clique aqui' link='https://github.com/' />
            </p>
            <img src={Projeto4} />



        </div>
    )
}
export default Card4

import styles from './Card.module.css'
import Projeto1 from '../../Image/projects/Projeto1.svg'
import ButtonB from './ButtonB'
function Card() {
    return (
        <div className={styles.Card}>
            <p>PROJETO 1
                <br /><br />

                React e Vite são duas tecnologias modernas amplamente utilizadas  <br /> no desenvolvimento web.  <br />React, uma biblioteca JavaScript mantida pelo Facebook, é conhecida<br /> por simplificar a criação de interfaces de usuário reativas.
                <ButtonB text='Clique aqui' link='https://github.com/' /> <br /><br /><br />

            </p>

            <img src={Projeto1} />







        </div>
    )
}
export default Card
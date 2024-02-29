import styles from './Card2.module.css'
import Projeto2 from '../../Image/projects/Projeto2.svg'
import ButtonB from './ButtonB'
function Card2() {
    return (
        <div className={styles.Card2}>
            <img src={Projeto2} />
            <p>PROJETO 2
                <br /><br />

                React e Vite são duas tecnologias modernas amplamente utilizadas  <br /> no desenvolvimento web.  <br />React, uma biblioteca JavaScript mantida pelo Facebook, é conhecida<br /> por simplificar a criação de interfaces de usuário reativas.
                <ButtonB text='Clique aqui' link='https://github.com/' />
            </p>

        </div>
    )
}
export default Card2

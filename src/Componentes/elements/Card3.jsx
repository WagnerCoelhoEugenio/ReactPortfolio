import styles from './Card3.module.css'
import Projeto3 from '../../Image/projects/Projeto3.svg'
import ButtonB from './ButtonB'
function Card3() {
    return (
        <div className={styles.Card3}>
            <p>PROJETO 3 <br /><br />


                React e Vite são duas tecnologias modernas amplamente utilizadas  <br /> no desenvolvimento web.  <br />React, uma biblioteca JavaScript mantida pelo Facebook, é conhecida<br /> por simplificar a criação de interfaces de usuário reativas.
                <ButtonB text='Clique aqui' link='https://github.com/' />

            </p>
            <img src={Projeto3} />



        </div>
    )
}
export default Card3

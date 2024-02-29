import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Down.module.css';
function Down() {
    return (
        <div className={styles.Down} id='Down'>
            <ul>
                <p>Meu contato:<br /> 12 988888888</p>
                <p>Email: <br /> wagnereugenio@hotmail.com</p>
                <li><a href='https://github.com/'><FaGithub size={32} /></a></li>
                <li><a href='https://www.linkedin.com/in/wagnereugenio/'><FaLinkedin size={32} /></a></li>

            </ul>
        </div>
    )
}

export default Down
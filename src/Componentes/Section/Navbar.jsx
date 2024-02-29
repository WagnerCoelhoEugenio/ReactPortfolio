import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>

                <li style={{ marginLeft: '210px' }} ><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li style={{ marginLeft: '80px' }}><Nav.Link href='#Down'>Tecnologia</Nav.Link></li>
                <li style={{ marginLeft: '80px' }}><Nav.Link href='#Skills'>Sobre mim</Nav.Link></li>
            </ul>

            <ul>
                <li><a href='https://github.com/'><FaGithub size={32} /></a></li>
                <li><a href='https://www.linkedin.com/in/wagnereugenio/'><FaLinkedin size={32} /></a></li>
            </ul>
        </div>


    )
}

export default Navbar

import styles from './Projects.module.css'
import Card from '../elements/Card'
import Card2 from '../elements/Card2'
import Card3 from '../elements/Card3'
import Card4 from '../elements/Card4'


function Projects() {
    return (
        <div className={styles.Projects} id='Projects' >
            <h1> Projetos</h1>
            <Card />
            <Card2 />
            <Card3 />
            <Card4 /><br />
        </div >
    )
}

export default Projects
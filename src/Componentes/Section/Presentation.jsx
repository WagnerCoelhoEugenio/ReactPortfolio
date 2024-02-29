import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['ao meu Portfolio'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType();
        }, delta);
        return () => { clearInterval(ticker) };

    }, [text, delta]);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }

    }
    return (
        <div className={styles.Presentation} id='Presentation'>
            <h4><strong>Bem vindo  {text}</strong></h4>
            <p>Inovador desenvolvedor apaixonado por desafios, com experiência sólida em projetos diversos.<br /> Comprometido com a excelência técnica, busco constantemente aprimorar minhas habilidades <br /> para criar soluções eficientes e impactantes. </p>

            <ButtonA link='https://github.com/' text='Saber mais' />

        </div>
    )
}

export default Presentation
import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    const timelineData = [
        { year: '2021', description: 'Gerente de projetos de Mutinacional no estado do Espirito Santo/Es.' },
        { year: '2022', description: 'Gerente de Projetos e coordenador de equipe de Multinacional do Estado do espirito Santo e Rio de Janeiro.' },
        { year: '2023', description: 'Diretor de logistica da empresa LOGX EXPRESS, nivel Brasil e Argentina.' },
        { year: '2024', description: 'Diretor de logistica da Empresa LOGX EXPRESS na Inglaterra.' },

    ];

    return (
        <div className={styles.Skills} id='Skills'>
            <h1>Sobre mim</h1>

            { }
            <div className={styles.timelineHorizontal}>
                {timelineData.map((event, index) => (
                    <React.Fragment key={index}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelinePoint}></div>
                            <div className={styles.timelineContent}>
                                <h3>{event.year}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                        {index < timelineData.length - 1 && (
                            <div className={styles.connectorLine}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

        </div>
    );
}

export default Skills;

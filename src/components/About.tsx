import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { IServiceCardProps } from '../utils/interfaces'

function ServiceCard({
  index,
  title,
  icon
}: IServiceCardProps): React.JSX.Element {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={100}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

function About(): React.JSX.Element {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre mim.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn('', '', 0.1, 1)}
      >
        Sou um Desenvolvedor apaixonado por tecnologia, especializado em JavaScript e C#. Com uma sólida formação e uma extensa experiência em projetos, estou pronto para enfrentar desafios e criar soluções inovadoras.
        <br />
        Com um foco especial em tecnologias como React, JavaScript, TypeScript, C#, .NET, Node.js e Bootstrap, tenho experiência na criação de aplicações de alto desempenho e interfaces de usuário envolventes. Meu portfólio abriga uma variedade de projetos bem-sucedidos, todos construídos com expertise nessas tecnologias.
        <br />
        Estou comprometido em aplicar meu conhecimento e habilidades para criar soluções de software excepcionais e estou sempre em busca de oportunidades emocionantes para expandir meu horizonte na área de desenvolvimento.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map(({ title, icon }, index) => (
          <ServiceCard
            key={title}
            index={index}
            title={title}
            icon={icon}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')

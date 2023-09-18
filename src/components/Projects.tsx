import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { IProjectCardProps, IProjectTag } from '../utils/interfaces'
import ModalImage from 'react-modal-image'

function ProjectCard({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  index
}: IProjectCardProps): React.JSX.Element {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        scale={1}
        transitionSpeed={450}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px]"
      >
        <div className="relative w-full">
          {/* Corrigir essa implementação */}
          <ModalImage
            small={image}
            alt={name}
            large={image}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(sourceCodeLink, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="Visualizar código fonte no Github"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {/* Adicionar link para a versão live do projeto */}M
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 absolute bottom-4">
          {tags.map(({ name, color }: IProjectTag) => (
            <p
              key={name}
              className={`text-[14px] ${color}`}
            >
              #{name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

function Projects(): React.JSX.Element {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Talk is cheap. SHow me the code!
        </p>
        <h2 className={styles.sectionHeadText}>Projetos.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore meu mundo digital. Cada projeto é uma história única, onde ideias se tornam realidade. Da web dinâmica às soluções técnicas avançadas, aqui você encontrará meu trabalho em desenvolvimento de software, apis, sites e aplicativos. Cada projeto é uma história de sucesso em constante evolução.
          <br />
          Sinta-se à vontade para explorar e entrar em contato para colaborarmos em algo excepcional.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map(
          ({ name, description, image, source_code_link, tags }, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              name={name}
              description={description}
              image={image}
              sourceCodeLink={source_code_link}
              tags={tags}
            />
          )
        )}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'projects')

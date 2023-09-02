import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { IExperienceCardProps } from '../utils/interfaces'

function ExperienceCard({
  title,
  companyName,
  date,
  icon,
  iconBg,
  points
}: IExperienceCardProps): React.JSX.Element {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={companyName}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {companyName}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 tracking-wider text-[14px]"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

function Experience(): React.JSX.Element {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>O que fiz até agora</p>
        <h2 className={styles.sectionHeadText}>Experiência Profissional.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map(
            ({ title, company_name, date, icon, iconBg, points }) => (
              <ExperienceCard
                key={title}
                title={title}
                companyName={company_name}
                date={date}
                icon={icon}
                iconBg={iconBg}
                points={points}
              />
            )
          )}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experience')

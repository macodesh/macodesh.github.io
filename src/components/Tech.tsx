import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

function Tech(): React.JSX.Element {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }) => (
        <div
          className="w-28 h-28"
          key={name}
          title={name}
        >
          <BallCanvas icon={icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')

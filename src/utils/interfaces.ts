export interface IProjectTag {
  name: string
  color: string
}

export interface IProjectCardProps {
  name: string
  description: string
  tags: IProjectTag[]
  image: string
  sourceCodeLink: string
  index: number
}

export interface IServiceCardProps {
  index: number
  title: string
  icon: string
}

export interface IExperienceCardProps {
  title: string
  companyName: string
  date: string
  icon: string
  iconBg: string
  points: string[]
}

export interface ITestimonialCardProps {
  name: string
  testimonial: string
  designation: string
  company: string
  index: number
  image: string
}

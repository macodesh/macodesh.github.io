import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

function Contact(): React.JSX.Element {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Marlon Couto',
          from_email: form.email,
          to_email: 'marloncouto199@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_USER_ID
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you! I will get back to you soon enough.')
          setForm({ name: '', email: '', message: '' })
        },
        (err) => {
          setLoading(false)
          console.error(err)
          alert('Oops! Something went wrong.')
        }
      )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Fale comigo</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label
            htmlFor="name"
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Seu Nome</span>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="José da Silva"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Seu Email</span>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="josesilva@email.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label
            htmlFor="message"
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Sua Mensagem</span>
            <textarea
              rows={6}
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto h-[350px] md:h-[550px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')

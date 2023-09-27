import {useForm} from 'react-hook-form'
import {Button, Input, Textarea} from '@nextui-org/react'
import './ContactUs.css'
import {useState} from 'react'

export const FormContactUs = () => {
  const [animationSkill, setAnimationSkills] = useState(false)

  const changeAnimationSkill = () => {
    if (window.scrollY >= 1800) {
      setAnimationSkills(true)
    }
  }
  window.addEventListener('scroll', changeAnimationSkill)

  const {handleSubmit, control} = useForm()

  const onSubmit = (data) => {}

  return (
    <div
      className={
        animationSkill
          ? 'animate__slower form-contactUs-container animate__animated animate__fadeInUp animate__slow'
          : 'hidden'
      }
    >
      <h1 className="title-form">Contactanos</h1>
      <form action="" onClick={onSubmit} className="form-contactUs">
        <label>Apellido y nombre</label>
        <Input
          isRequired
          type="string"
          className="max-w-xs text-black"
          placeholder="Ingresa tu apellido y nombre"
        />
        <label>Email</label>
        <Input
          size="lg"
          isRequired
          type="email"
          className="max-w-xs text-black"
          placeholder="Ingresa tu mail"
        />
        <label>Empresa</label>
        <Input
          isRequired
          type="string"
          className="max-w-xs text-black"
          placeholder="¿A qué empresa perteneces?"
        />
        <label className="label-textarea">Consulta</label>
        <Textarea labelPlacement="outside" placeholder="¡Hola! Me gustaría solicitar una demo." />
        <Button type="submit" className="button-form mt-2">
          Solicitar demo
        </Button>
      </form>
    </div>
  )
}

import {useForm} from 'react-hook-form'
import {Button, Input, Textarea} from '@nextui-org/react'
import './ContactUs.css'
import {useState} from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
export const FormContactUs = () => {
  // const [animationSkill, setAnimationSkills] = useState(false)
  const [data, setData] = useState({
    Consulta: '',
    Email: '',
    Empresa: '',
    Name: '',
  })
  // const changeAnimationSkill = () => {
  //   if (window.scrollY >= 1800) {
  //     setAnimationSkills(true)
  //   }
  // }
  // window.addEventListener('scroll', changeAnimationSkill)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://prod-61.eastus2.logic.azure.com:443/workflows/5a9b7ee939ad4cc5b223c07be518f704/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cZ3LcDcsCKLVgH87ZOEST7FSosJycrO5YOA1oIwUiFE',
        data,
      )
      setData({
        Consulta: '',
        Email: '',
        Empresa: '',
        Name: '',
      })
      setTimeout(() => {
        toast.success('Solicitud enviada!')
      }, 500)
    } catch (error) {
      toast.error('Error al enviar la solicitud')
      console.error('Error al enviar la solicitud:', error)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name]: value})
  }
  return (
    <div
      // className={
      //   animationSkill
      //     ? 'animate__slower form-contactUs-container animate__animated animate__fadeInLeftBig animate__slow'
      //     : 'hidden'
      // }
      className="form-contactUs-container"
    >
      <h1 className="title-form">Contáctanos</h1>

      <form onSubmit={onSubmit} className="form-contactUs">
        <div>
          <label>Name:</label>
          <Input isRequired type="text" name="Name" value={data.Name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <Input isRequired type="email" name="Email" value={data.Email} onChange={handleChange} />
        </div>
        <div>
          <label>Empresa:</label>
          <Input
            isRequired
            type="text"
            name="Empresa"
            value={data.Empresa}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Consulta:</label>
          <Textarea
            isRequired
            type="text"
            name="Consulta"
            value={data.Consulta}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="button-form mt-2">
          Solicitar demo
        </Button>
      </form>
    </div>
  )
}

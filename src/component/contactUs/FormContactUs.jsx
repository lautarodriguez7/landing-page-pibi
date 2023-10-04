import {useForm} from 'react-hook-form'
import {Button, Input, Textarea} from '@nextui-org/react'
import './ContactUs.css'
import {useState} from 'react'
import axios from 'axios'

export const FormContactUs = () => {
  const [animationSkill, setAnimationSkills] = useState(false)
  const [data, setData] = useState({
    // Aquí puedes definir los datos que deseas enviar en la solicitud POST
    // Por ejemplo, puedes definir un objeto con los nombres que mencionaste antes.
    Consulta: '',
    Email: '',
    Empresa: '',
    Name: '',
  })
  const changeAnimationSkill = () => {
    if (window.scrollY >= 1800) {
      setAnimationSkills(true)
    }
  }
  window.addEventListener('scroll', changeAnimationSkill)

  const {handleSubmit, control, register} = useForm()

  // const onSubmit = (data) => {
  //   // console.log(data)
  //   axios
  //     .post(process.env.REACT_APP_BACKEND_URL, data)
  //     .then((response) => {
  //       console.log('Formulario enviado con éxito:', response.data)
  //     })
  //     .catch((error) => {
  //       console.error('Error al enviar el formulario:', error)
  //     })
  // }
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://prod-61.eastus2.logic.azure.com:443/workflows/5a9b7ee939ad4cc5b223c07be518f704/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cZ3LcDcsCKLVgH87ZOEST7FSosJycrO5YOA1oIwUiFE',
        data,
      )

      console.log('Respuesta del servidor:', response.data)
      // Puedes hacer algo con la respuesta del servidor aquí.
    } catch (error) {
      console.error('Error al enviar la solicitud:', error)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name]: value})
  }
  return (
    <div
      className={
        animationSkill
          ? 'animate__slower form-contactUs-container animate__animated animate__fadeInUp animate__slow'
          : 'hidden'
      }
    >
      <h1 className="title-form">Contactanos</h1>
      {/* <form action="" onSubmit={handleSubmit(onSubmit)} className="form-contactUs">
        <label>Apellido y nombre</label>
        <Input
          {...register('Name')}
          control={control}
          isRequired
          type="string"
          className="max-w-xs text-black"
          placeholder="Ingresa tu apellido y nombre"
          name="Name"
        />
        <label>Email</label>
        <Input
          {...register('Email')}
          control={control}
          size="lg"
          isRequired
          type="email"
          className="max-w-xs text-black"
          placeholder="Ingresa tu mail"
          name="Email"
        />
        <label>Empresa</label>
        <Input
          {...register('Empresa')}
          control={control}
          isRequired
          type="string"
          className="max-w-xs text-black"
          placeholder="¿A qué empresa perteneces?"
          name="Empresa"
        />
        <label className="label-textarea">Consulta</label>
        <Textarea
          control={control}
          {...register('Consulta')}
          labelPlacement="outside"
          placeholder="¡Hola! Me gustaría solicitar una demo."
          name="Consulta"
        />
        <Button type="submit" className="button-form mt-2">
          Solicitar demo
        </Button>
      </form> */}
      <form onSubmit={onSubmit} className="form-contactUs">
        <div>
          <label>Name:</label>
          <Input type="text" name="Name" value={data.Name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <Input type="email" name="Email" value={data.Email} onChange={handleChange} />
        </div>
        <div>
          <label>Empresa:</label>
          <Input type="text" name="Empresa" value={data.Empresa} onChange={handleChange} />
        </div>
        <div>
          <label>Consulta:</label>
          <Textarea type="text" name="Consulta" value={data.Consulta} onChange={handleChange} />
        </div>

        {/* <button type="submit">Enviar</button> */}
        <Button type="submit" className="button-form mt-2">
          Solicitar demo
        </Button>
      </form>
    </div>
  )
}

import {useState} from 'react'

const animationSkill = () => {
  const [useAnimation, setUseAnimation] = useState(false)

  const changeAnimationSkill = (numberScroll) => {
    if (window.scrollY >= numberScroll) {
      setUseAnimation(true)
    }
  }
  return {useAnimation, changeAnimationSkill}
}
export default animationSkill

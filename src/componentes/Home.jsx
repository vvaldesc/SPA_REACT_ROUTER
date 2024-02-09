import { Link } from 'react-router-dom'
import react_ico from '../assets/react.svg'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <img src={react_ico} alt="react" />
      <p>Esta es la página de inicio</p>
      <Link to="/productos">Productos</Link>
    </div>
  )
}

export default Home
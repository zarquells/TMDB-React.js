import { Link } from 'react-router-dom';

//biblioteca com milhares de icons diferentes disponibilizada pelo React 
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

const navbar = () => {
  return (
    <div>
        <nav id="navbar">
            <h2>
            <Link to='/'> <BiCameraMovie/> Movies</Link>
            </h2>
            
            <form>
              <input type='text' placeholder='Pesquisar filmes'/>
              <button type='submit'> <BiSearchAlt2/> </button>
            </form>
      </nav>
    </div>
  )
}

export default navbar

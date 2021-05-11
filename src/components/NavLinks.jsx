
import {Nav} from 'react-bootstrap'

const NavLinks = ({name,logo}) => {
    return (

  <Nav.Item >
    <Nav.Link style = {{height:'40px', color:'white',fontWeight:'600'}} className = 'd-flex align-items-center' >{logo} {name}</Nav.Link>
     
    

  </Nav.Item>
    )
}
export default NavLinks


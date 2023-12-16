import Nav from 'react-bootstrap/Nav'
import axios from 'axios'

export default function Logout(){

    async function handleClick(){
        try{
            console.log('click logout')
            const response = await axios.post('http://localhost:5000/logout')
            console.log(response)
        }catch(err){
            console.error(err)
        }
    }

    return (
        <Nav.Link>
            <button onClick={handleClick}>
                Logout
            </button>
        </Nav.Link>
    )
}

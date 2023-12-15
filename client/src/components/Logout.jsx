import Nav from 'react-bootstrap/Nav'
import axios from 'axios'

export default function Logout(){

    async function handleClick(){
        try{
            const response = await axios.get('https://localhost:5173/logout')
            console.log(response)
        }catch(err){
            console.error(err.response.data.message)
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

import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"


export default function Welcome({user}){
    console.log(user) // email, displayname, photoURL
    
    const auth = getAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
        localStorage.clear()
        navigate('/login')
        })
        .catch(err =>{
            console.error(err)
        })
    }

    return(
    <>
    <h1>Welcome</h1>
    <h2>{user.displayName || user.email}</h2>
    {user.photoURL && <img src={user.photoURL} alt="Profile of logged-in user" />}
    <button onClick={handleLogout}>Log Out</button>
    </>
    )
}
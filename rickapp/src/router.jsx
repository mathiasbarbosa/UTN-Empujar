import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import DetailCharacter from "./components/DetailCharacter/DetailCharacter"
import Register from "./components/Register/Register"
import Favoritos from "./components/Favoritos/Favoritos"


export const AppRouter = ({user, setUser}) => {


    return(
        <Routes>
            <Route path='/' element={<Home user={user} setUser={setUser} />} /> 
            <Route path='/registeruser' element={<Register />} /> 
            <Route path='/favoritos' element={<Favoritos user={user} />} /> 
            <Route path='/detailcharacter/:id' element={<DetailCharacter />} /> 
        </Routes>
    )
}
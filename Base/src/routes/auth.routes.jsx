import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Cachorro } from '../pages/Cachorro'
import { Gato } from '../pages/Gato'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cachorro" element={<Cachorro />} />
            <Route path="/Gato" element={<Gato />} />
        </Routes>
    )
}
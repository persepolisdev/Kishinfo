
import '../App.css'
import About from './Aboutpage.jsx'
import Homepage from './Homepage.jsx'
import { Route, Routes } from "react-router-dom"

function Routingpage() {

return (
<Routes>
<Route path="/" element={<Homepage />} />
<Route path="/about" element={<About />} />
    </Routes>

)
}

export default Routingpage

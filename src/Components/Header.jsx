import { useState } from 'react'
import SVGComponent from '../Components/SVGComponent.jsx'
export default function Header(){
    const [count, setCount] = useState(0)

    return (
      <>
     
      <div class="header">
  
  
  <div class="inner-header flex">
  
<h1>kish island</h1>
  </div>
  
  <div>
  <SVGComponent />
  </div>
  
  
  </div>
  
  
  
 
  
      </>
    )
  }
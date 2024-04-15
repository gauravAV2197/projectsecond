import { useState } from 'react'


import Navbar from './Components/Navbar'
import Pathway from './Components/Pathway'
import Boost from './Components/Boost'
import Everything from './Components/everything'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Signup from './Components/Signup'
import Footer from './Components/footer'

function App() {
 

  return (
    <>
     <div>
      <div class='bg-gradient-to-t from-blue-500 to-white pb-[450px]'>
         <Navbar></Navbar>
         <Pathway></Pathway>
       </div>
          <Boost></Boost>
          <Everything></Everything>
          <Pricing></Pricing>    
          <Testimonials></Testimonials>
          <Signup></Signup>        
          <Footer></Footer>
             </div>
    </>
  )
}

export default App

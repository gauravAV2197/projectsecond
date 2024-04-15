function Navbar(){
  return(

 <>
     <nav className = " h-40 w-full mt-[-20px] ">

      <input type="checkbox" id = "check" className = "hidden" />

      <label For = "check" className = "float-right text-3xl leading-[160px] mr-10 lg:hidden">
     
      <i class="fa-solid fa-bars"></i>

      </label>
 
         <label className = "Leading -[80px] pl-12 md:pl-24 md:text-2xl text-xl" > <img className = "w-10" src = "img1.png" />made by Framer</label>

         <ul className = " md:gap-y-10  float-right mr-10 lg:flex leading-[-80px] space-x-4 text-lg rounded fixed lg:relative h-[100vh] lg:h-0 w-[100%] lg:w-fit top-20 lg:top-0 left-[-100%] lg:left-0 transition-all duration-300 lg:transition-none text-center bg-gradient-to-t from-blue-300 to-white pb-[350px]">
            
             <li><a href = "#">About</a></li>

             <li><a href = "#">Features</a></li>

             <li><a href = "#">Customers</a></li>

             <li><a href = "#">Updates</a></li>

             <li><a href = "#">Help</a></li>

             <li> <a className = "bg-black text-white px-5 py-2 rounded-lg hover:bg-black" href = "#"> Get for Free</a></li>


         </ul>

     </nav>
    
 
 
 
 </>

  )


}
export default Navbar
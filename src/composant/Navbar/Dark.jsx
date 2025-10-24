import React from "react"; 
import { NavbarMenu } from "../../data/data" 
import { CiSearch } from "react-icons/ci";
 import { MdMenu } from "react-icons/md";
  import { FaDumbbell } from "react-icons/fa";
   import ResponsiveMenu from "./ResponsiveMenu"; import Darkmode from "./Darkmode";
    import {useState} from "react"
 export default function Dark(){
     const [open, setOpen] = React.useState(false); 
    const [showInput, setShowInput] = useState(false);
     console.log(NavbarMenu);
      return( <> <nav className="mt-6">
        <div className="shadow-md w-full bg-white dark:bg-gray-900 duration-200 relative z-40"> 
            <div className=" container mx-auto px-8 flex justify-between items-center py-8"> {/* logo section*/} 
                <div className="text-2xl flex items-center gap-2 font-bold py-8">
                    <FaDumbbell /> 
                    <p>predSalaire</p> 
                </div> 
                {/* menu section */}
                <div className="block"> 
                    <ul className="flex items-center gap-6 text-gray-600"> 
                        { NavbarMenu.map((item) => { 
                        return( <li key ={item.id}> 
                        <a href = {item.link} className="inline-block py-1 px-3 hover:text-primary">
                                {item.title}</a> 
                        </li> ); }) } 
                    </ul> 
                </div> 
                {/* Icons section*/ }
                <div className="flex items-center gap-4"> 
                    <div className="flex items-center border-2 border-gray-300 rounded-full px-2">
                        {showInput && ( 
                        <input type="text" placeholder="Search" className="search-bar p-2 outline-none"/> 
                        )} 
                        <button onClick={() => setShowInput(!showInput)} className="text-2xl p-2 hover:bg-primary hover:text-white duration-200"> 
                           <CiSearch /> 
                        </button> 
                    </div> 
                    <button className=" hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-3 duration-200 " style={{ padding: '6px 20px' }}>
                         Login
                    </button> 
                                                 {/* <div className="flex items-center gap-4"> 
                                                 <button className=" text-2xl hover:bg-primary hover:text-white rouned-full p-2 duraction-200 "> 
                                                 <input type="text" placeholder="Search" className="search-bar"/> 
                                                 <CiSearch className=""/>
                                                  </button>
                                                   <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200"> 
                                                   Login </button> */}
                    {/* Dark mode section*/ } 
                    <Darkmode />
                </div>
                {/* Mobile hamburger menu section*/ }
                <div className = "md:hidden" onClick = {()=> setOpen(!open) }> 
                    <MdMenu className="text-4xl"/>
                </div> 
            </div> 
        </div> 
    </nav>
                                                          {/* Mobile Sidebar section */} 
    <ResponsiveMenu open={open}/>
    </> 
)
}
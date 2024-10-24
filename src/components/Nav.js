// import { React, useState} from 'react';
// import FlexiHomes_Logo_ble from '../images/FlexiHomes_Logo_ble.png';
// import { Link } from 'react-router-dom';

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);
//   let gb = 'bg-gradient-to-r from-blue-200'
//   let navbar = isOpen ? `w-full block absolute bg-gray-500 w-4/12 p-2 z-50 -right-0 ${gb}`: "w-full lg:flex lg:items-center lg:w-auto hidden"

//   return (
//     <nav className='bg-gradient-to-r from-blue-700 to green-500'>
//       <div className='container mx-auto flex justify-between items-center lg:h-16 px-2'>
//         <img src={FlexiHomes_Logo_ble} className='w-32'/>
//         <div className='block lg:hidden relative'>
//           <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none '>
//             <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//           </button>
//         </div>
//         <div className={navbar}>
//           <ul className='lg:flex lg:space-x-6'>
//               <li>
//                 <Link to='/' className='block py-2 px-4 hover:bg-blue-400 rounded' >HOME</Link>
//               </li>
//               <li>
//                 <Link to="/about" className='block py-2 px-4 hover:bg-blue-400 rounded' >ABOUT</Link>
//               </li>
//               <li>
//                 <Link to="/services" className='block py-2 px-4 hover:bg-blue-400 rounded' >SERVICES</Link>
//               </li>
//               <li>
//                 <Link to="/Contact" className='block py-2 px-4 hover:bg-blue-400 rounded' >CONTACT</Link>
//               </li>
//               <li>
//                 <Link to="/Contact" className='block py-2 px-4 hover:bg-blue-400 rounded lg:hidden' >BECOME AN AFFILATE</Link>
//               </li>
//           </ul>
//         </div>
//       </div>
      
//     </nav>
//   )
// }

// export default Nav


import { React, useState } from 'react';
import FlexiHomes_Logo_ble from '../images/FlexiHomes_Logo_ble.png';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the nav when a link is clicked
  const closeNav = () => {
    setIsOpen(false);
  };
  
  let gb = 'bg-gradient-to-r from-blue-200';
  let navbar = isOpen ? `w-full block absolute bg-gray-500 w-4/12 p-2 z-50 right-0 ${gb}` : 'w-full lg:flex lg:items-center lg:w-auto hidden';

  return (
    <nav className='bg-gradient-to-r from-blue-700 to-green-100'>
      <div className='container mx-auto flex justify-between items-center lg:h-16 px-2'>
        <Link to='/' className='flex-shrink-0'>
          <img src={FlexiHomes_Logo_ble} className='w-32' alt='FlexiHomes Logo' />
        </Link>
        <div className='block lg:hidden relative'>
          <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        <div className={navbar}>
          <ul className='lg:flex lg:space-x-6'>
            <li>
              <Link to='/' className='block py-2 px-4 hover:bg-blue-400 rounded' onClick={closeNav}>HOME</Link>
            </li>
            <li>
              <Link to='/about' className='block py-2 px-4 hover:bg-blue-400 rounded' onClick={closeNav}>ABOUT</Link>
            </li>
            <li>
              <Link to='/services' className='block py-2 px-4 hover:bg-blue-400 rounded' onClick={closeNav}>SERVICES</Link>
            </li>
            <li>
              <Link to='/contact' className='block py-2 px-4 hover:bg-blue-400 rounded' onClick={closeNav}>CONTACT</Link>
            </li>
            <li>
              <Link to='/affilate-program' className='block py-2 px-4 hover:bg-blue-400 rounded lg:hidden' onClick={closeNav}>BECOME AN AFFILIATE</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;


import Link from 'next/link'
import {useState} from 'react';

const NavBar = () => {
  const navigatorStyle = "text-white font-serif p-2 cursor-pointer";
  const [buttonState, setButtonState] = useState("hidden");
  
  const handleClick = (e:any) => {
    if (buttonState === "hidden") {
        setButtonState("block");
    } else {
        setButtonState("hidden");
    }
    console.log('click');
  };
  
  return (
      <nav className="flex items-center flex-wrap bg-black p-7">
          {/* <header className="sticky top-0 z-30 w-full px-2 py-4 bg-black sm:px-4 shadow-xl"> */}
          <div className="flex items-center justify-between mx-auto max-w-7xl">
              <Link href="/">
                  <div className="h-16 w-16 cursor-pointer">
                      <img src="logo.jpg" alt="PEMM Logo" />
                  </div>
              </Link>
              <p className="text-white pl-3 w-64 font-serif">
                  Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary Project
              </p>
              <div className="flex items-center space-x-1">
                  <ul className="hidden space-x-2 md:inline-flex">
                      <li><a href="/" className="px-4 py-2 font-semibold text-white rounded">Home</a></li>
                      <li><a href="/paintings" className="px-4 py-2 font-semibold text-white rounded">Paintings</a></li>
                      <li><a href="/stories" className="px-4 py-2 font-semibold text-white rounded">Stories</a></li>
                      <li><a href="/manuscripts" className="px-4 py-2 font-semibold text-white rounded">Manuscripts</a></li>
                      <li><a href="/about" className="px-4 py-2 font-semibold text-white rounded">About</a></li>
                  </ul>
                  <div className="inline-flex md:hidden">
                      <button onClick={(e) => handleClick(e)} className="flex-none px-2 ">
                          <div className="space-y-2">
                              <div className="w-8 h-0.5 bg-white"></div>
                              <div className="w-8 h-0.5 bg-white"></div>
                              <div className="w-8 h-0.5 bg-white"></div>
                          </div>
                          <span className="sr-only">Open Menu</span>
                      </button>
                  </div>
              </div>
          </div>
          <ul className={buttonState}>
              <li><a href="/" className="inline-block px-4 py-2 font-semibold text-white rounded">Home</a></li>
              <li><a href="/paintings" className="inline-block px-4 py-2 font-semibold text-white rounded">Paintings</a></li>
              <li><a href="/stories" className="inline-block px-4 py-2 font-semibold text-white rounded">Stories</a></li>
              <li><a href="/manuscripts" className="inline-block px-4 py-2 font-semibold text-white rounded">Manuscripts</a></li>
              <li><a href="/about" className="inline-block px-4 py-2 font-semibold text-white rounded">About</a></li>
          </ul>
          {/* </header> */}
      </nav>
  )
}

export default NavBar

{/* 
    <nav className="flex items-center flex-wrap bg-black p-7">
        <Link href='/'>
            <div className="h-16 w-16 cursor-pointer">
                <img src="logo.jpg" alt="PEMM Logo"/>
            </div>
        </Link>
        <p className="text-white pl-3 w-64 font-serif">
            Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary Project
        </p>
        <div className="ml-auto inline-flex mr-7">
            <Link href='/paintings'>
                <p className={navigatorStyle}> Paintings </p>
            </Link>
            <Link href='/stories'>
                <p className={navigatorStyle}> Stories </p>
            </Link>
            <Link href='/manuscripts'>
                <p className={navigatorStyle}> Manuscripts </p>
            </Link>
            <Link href='/about'>
                <p className={navigatorStyle}> About </p>
            </Link>
        </div>
    </nav> 
*/}
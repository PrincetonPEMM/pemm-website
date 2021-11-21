import Link from 'next/link'

const NavBar = () => {
  const navigatorStyle = "text-white font-serif p-2 cursor-pointer";
  return (
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
  )
}

export default NavBar

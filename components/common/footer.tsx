import Link from 'next/link'
import Social from '../elements/social'

const Footer = () => {
  const footerLinkStyles = "text-white cursor-pointer hover:text-blue-600";
  return (
    <footer className="flex items-left flex-wrap bg-black p-7 gap-x-56">
        <div className="pl-5 inline-flex flex-col">
          <Link href='/'>
              <div className="cursor-pointer w-40">
                  <img src="logo.jpg" alt="PEMM Logo"/>
              </div>
          </Link>
          <p className="text-white w-60 pt-2 pb-2 font-serif">
            Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary Project
          </p>
          <img className="bg-white w-60" src="princeton_logo.png" alt="Princeton Logo"/>
        </div>
        <div className="inline-flex flex-col">
          <p className="text-white text-2xl">Our Work</p>
          <div className="pt-5">
            <Link href='/volunteers'>
              <p className={footerLinkStyles}>
                Volunteers
              </p>
            </Link>
          </div>
        </div>
        <div className="inline-flex flex-col">
          <p className="text-white text-2xl">Partners</p>
          <div className="pt-5">
            <Link href='https://www.neh.gov/'>
              <p className={footerLinkStyles}>
                National Endowment for the Humanities
              </p>
            </Link>
            <Link href='https://researchcomputing.princeton.edu/'>
              <p className={footerLinkStyles}>
                Princeton Research Computing
              </p>
            </Link>
          </div>
        </div>
        <div className="inline-flex flex-col">
          <p className="text-white text-2xl">Contact</p>
          <div className="pt-5">
            <p className="text-white w-60 inline-flex flex-col gap-y-3">
              <a href = "mailto: wendy@princeton.edu">Wendy Belcher</a>
              <a href = "mailto: evgeniia@princeton.edu">Evgeniia Lambrinaki</a>
            </p>
            <div className="pt-3">
              <Social/>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer

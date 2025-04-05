import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'
import logo from "../assets/logo.png"

const Navbar = () => {
    return(
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={50} height={33} alt="Logo"></img>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/muhammad-zidan-alhilali-aaa63b321"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/zidandot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/m.alzdn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://x.com/alzdnnn?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter">
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
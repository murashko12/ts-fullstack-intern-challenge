import { useLocation } from "react-router-dom"
import NavbarItem from "./NavbarItem"

const Navbar = () => {

    const { pathname } = useLocation()
    console.log(pathname);
    
    return (
        <nav className="fixed flex w-full h-16 bg-[#2196F3] px-[62px] shadow-[0_4px_4px_0_rgba(0,0,0,0.24)] z-50">
            <NavbarItem currentPath={pathname} toPage={"/"} title={"Все котики"} />
            <NavbarItem currentPath={pathname} toPage={"/favorites"} title={"Любимые котики"} />
        </nav>  
    )
}

export default Navbar

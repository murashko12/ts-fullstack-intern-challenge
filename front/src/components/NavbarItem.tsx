import { Link } from "react-router-dom"

interface IProps {
    title: string
    toPage: string
    currentPath: string
}

const NavbarItem = ({ title, toPage, currentPath }: IProps) => {
    return (
        <Link 
            to={toPage} 
            className={`
                flex h-16 items-center px-6 text-white/70
                hover:bg-[#1E88E5] hover:text-white
                ${currentPath === toPage && "bg-[#1E88E5] !text-white"}
            `}
        >
            {title}
        </Link>
    )
}

export default NavbarItem

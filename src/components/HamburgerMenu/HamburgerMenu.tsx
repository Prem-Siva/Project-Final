import { Link } from "react-router-dom"

interface IHamburgerMenuProps {
    handleOpenMenu(status:boolean): void;
    open: boolean;
}

export const HamburgerMenu = (props:IHamburgerMenuProps) => {
    const handleClick = () => {
        props.handleOpenMenu(false);
    }
    return (
        <>
            <ul>
                <li onClick={handleClick}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={handleClick}>
                    <Link to="/menu">Search</Link>
                </li>
                <li onClick={handleClick}>
                    <Link to="/booking">Booking</Link>
                </li>
                <li onClick={handleClick}>
                    <Link to="/contact">Sign In</Link>
                </li>
                {/* <li onClick={handleClick}>
                    <Link to="/admin">Sign In</Link>
                </li> */}
            </ul>
        </>
    )
}
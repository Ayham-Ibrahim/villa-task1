import Navbar from "../navbar/Navbar";
import SubHeader from "../sub-header/SubHeader";
import "./Header.css";

const Header = () => {
    return (
        <>
            <SubHeader/>
            <div className="Header">
                <header className="header-area header-sticky">
                    <Navbar/>
                </header>
            </div>
        </>
    )
}

export default Header

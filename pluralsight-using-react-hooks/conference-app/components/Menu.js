
import Link from "next/link";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                        <Link href="/speakers">
                            <a className="nav-link">Speakers</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Menu;
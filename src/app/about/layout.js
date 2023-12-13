// navbar 
import Link from "next/link";
import "./layout.css";
function Layout({ children }) {
    return (
        <div className="layout">
            <nav>
                <Link className="link" href="/">
                    Home
                </Link>
                <Link className="link" href="/about">
                    About
                </Link>
                <Link className="link" href="/about/aboutteacher">
                    About Teacher
                </Link>
                <Link className="link" href="/about/aboutstudent">
                    About Student
                </Link>
            </nav>
            {children}
        </div>
    );
}

export default Layout;
// navbar 
'use client'
import Link from "next/link";
import "./layout.css";
import { usePathname } from "next/navigation";
function Layout({ children }) {
    const pathName = usePathname();
    return (
        <div className="layout">
            {
                pathName !== "/about/aboutteacher" ?
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
                    </nav> : null
            }
            {children}
        </div>
    );
}

export default Layout;
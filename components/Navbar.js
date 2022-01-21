import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/Apple logo icon - 256.png" 
                width={128} height={128} alt=""/>
            </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/employee/directory"><a>Directory</a></Link>
        </nav>
     );
}
 
export default Navbar;

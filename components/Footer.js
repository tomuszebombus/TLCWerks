import Link from "next/link";

const Footer = () => {
    return ( 
    <footer>
            <p>Copyright© 2022 - TLCWerks</p>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
    </footer>
    )
}
 
export default Footer;
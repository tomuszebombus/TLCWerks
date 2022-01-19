import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router])
    return ( 
        <div className="not-found">
            <h1>Ooops!</h1>
            <h2>That page cannot be found..</h2>
            <p>Return to <Link href="/"><a>🏡</a></Link> </p>
        </div>
     );
}
 
export default NotFound;
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Nav =(props)=> {
    const user=true;
    
    return(
<> 
</>
    )

}
export default Nav;
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Nav = (props) => {
  const user = true;
  const authlinks = [{ title: "Create", href: "/create", auth: true }];
  const navlinks = [{ title: "About", href: "/about", auth: false }];
  return (
    <>
      <nav className="nav">
        <span className="logo">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </span>
        <ul className="navlinks">
          {user &&
            authlinks.map((link) => {
              return (
                <li className={link.title} key={link.title}>
                  <Link href={link.href}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              );
            })}
          {navlinks.map((link) => {
            return (
              <li className={link.title} key={link.title}>
                <Link href={link.href}>
                  <a>{link.title}</a>
                </Link>
              </li>
            );
          })}

          {user ? (
            <>
              <li>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
              <li>
                <Link href="/logout">
                  <a>Logout</a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/singup">
                  <a>Sign Up</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: space-around;
          // height:60
          min-height: 54px;
          min-width: 100%;
        }
        .navlinks {
          width: 33%;
          display: flex;
          list-style-type: none;
          justify-content: space-around;
        }
        li:hover a:hover {
          color: white;
          background-color: black;
        }
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};
export default Nav;

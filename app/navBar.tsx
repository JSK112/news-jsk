import Link from "next/link";


const Nav = () => {
    return (
      
      <nav className="flex text-stone-800 px-9 justify-between h-20 bg-gray-100 items-center shadow-md mb-4 ">
        <Link href="/" className="text-4xl">JSKnews</Link>
        <ul className="flex space-x-6 text-2xl pr-10">
          <li><Link href="/news/">News</Link></li>
          <li><Link href="/add/">addNews</Link></li>
        </ul>
      </nav>
      
    );
}
export default Nav;
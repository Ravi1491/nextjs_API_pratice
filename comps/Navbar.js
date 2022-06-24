import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/nike-3-logo-svg-vector.svg" width={150} height={100}/>
      </div>
      <Link href="/"><a><h3>Home</h3></a></Link>
      <Link href="/about"><a><h3>About</h3> </a></Link>
      <Link href="/users"><a><h3>Users</h3></a></Link>
    </nav>
  );
}
 
export default Navbar;
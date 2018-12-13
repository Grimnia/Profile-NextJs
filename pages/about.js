import Link from 'next/link'

export default () => (
  <div>
  <Link href="/">
    <a style={{ fontSize: 20 }}>Home</a>
   </Link>
   <p>This is the about page</p>
   <Link href="/main-resume">
   <button>Hire Me</button>
   </Link>
   </div>
)

import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
       <a style={{ fontSize: 20 }}>
       About
       </a>
    </Link>
   <p>Hello Next.js</p>
     <br/>
    <Link href="/test">
      <a>test</a>
    </Link>
   </div>
)

export default Index

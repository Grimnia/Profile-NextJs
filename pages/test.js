import Link from 'next/link'

export default () => (
  <div>
  Click{' '}
  <Link href={{ pathname: '/about', query: { name: 'Ricardo' } }}>
    <a>here</a>
  </Link>{' '}
    to read more
  </div>
)

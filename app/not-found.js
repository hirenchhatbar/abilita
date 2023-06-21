import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center p-5">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">Home Page</Link>
      </p>
    </div>
  )
}

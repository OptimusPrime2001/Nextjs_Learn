'use client'
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Page({ params }: { params: { slug: string } }) {
  const pathName = useParams()
  return <div>
    <h1>Optional catch-all dynamic Route: [[...folderName]]</h1>
    <h2>
    My Slug: {params.slug}
    </h2>
    <p>params: {JSON.stringify(pathName)}</p>
    <Link className="bg-sky-200 p-3 rounded-md block w-fit m-4" href='/shop'>Back to home</Link>
  </div>
}
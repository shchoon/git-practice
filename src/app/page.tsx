import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <li><a href='/login'>Login</a></li>
      <li><a href='/myCenter'>myCenter</a></li>
    </main>
  )
}

'use client'
import Link from 'next/link'
export default function Underfooter() {

  const links = [
    {label: 'Cookie Settings', href:'#'}, 
    {label: 'Privacy Policy', href:'#'}, 
    {label: 'Terms and Conditions', href:'#'}, 
    {label: 'Imprint', href:'#'}, 
  ]
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-white">
      {links.map((link) => (
        <div key={link.label} className="flex items-center gap-3">
          <Link
          href={link.href}
          className="hover:underline transition-colors"
          >
            {link.label}
          </Link>
          <span aria-hidden="true" className="select-none">
            |
          </span>
        </div>
      ))}
      <span>&copy; 2026 Atlas Thailand Co., Ltd.</span>
    </div>
  )
}
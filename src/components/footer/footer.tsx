'use client'
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok, FaYoutube } from 'react-icons/fa'
import Underfooter from './underfooter'
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm mb-5">
        <div>
          <h3 className="font-bold text-base">PRODUCTS</h3>
          <ul className="space-y-4 mt-4">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>SALE</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base">COLLECTIONS</h3>
          <ul className="space-y-4 mt-4">
            <li>OREGON</li>
            <li>NEPTUNE</li>
            <li>BEACH</li>
            <li>WAVE</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base">COMPANY INFO</h3>
          <ul className="space-y-4 mt-4">
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>BLOG</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base">CUSTOMER SUPPORT</h3>
          <ul className="space-y-4 mt-4">
            <li>SHIPPING</li>
            <li>RETURNS</li>
            <li>FAQ</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base">FOLLOW US</h3>
          <ul className="space-y-4 mt-4">
            <li className='flex items-center gap-4'><FaInstagram size={24} /></li>
            <li className='flex items-center gap-4'><FaFacebook size={24} /></li>
            <li className='flex items-center gap-4'><FaPinterest size={24} /></li>
            <li className='flex items-center gap-4'><FaTiktok size={24} /></li>
            <li className='flex items-center gap-4'><FaYoutube size={24} /></li>
          </ul>
        </div>
      </div>
      <Underfooter />
    </footer>

  )
}
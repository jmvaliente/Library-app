import React from 'react'
import Image from 'next/image'

function MenuMobile () {
  return (
    <nav className="fixed bottom-0 w-full rounded-t-xl border-2 border-slate-800 p-2 bg-white">
      <ul className='flex justify-around'>
        <li>
          <a href='#'>
            <Image
              loading="lazy"
              className="object-cover object-center"
              alt="Icon Menu"
              src={'/../public/home.png'}
              width={40}
              height={40}
            />
          </a>
        </li>
        <li>
          <a href='#'>
            <Image
              loading="lazy"
              className="object-cover object-center"
              alt="Icon Menu"
              src={'/../public/open-book.png'}
              width={40}
              height={40}
            />
          </a>
        </li>
        <li>
          <a href='#'>
            <Image
              loading="lazy"
              className="object-cover object-center"
              alt="Icon Menu"
              src={'/../public/search.png'}
              width={40}
              height={40}
            />
          </a>
        </li>
        <li>
          <a href='#'>
            <Image
              loading="lazy"
              className="object-cover object-center"
              alt="Icon Menu"
              src={'/../public/user.png'}
              width={40}
              height={40}
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuMobile

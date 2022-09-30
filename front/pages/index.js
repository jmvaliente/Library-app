import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from '../ui/components/Search'
import BookCard from '../ui/components/BookCard'
import Review from '../ui/components/Review'
import MenuMobile from '../ui/components/MenuMobile'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='flex items-center px-4 my-8 justify-between'>
        <Image
              loading="lazy"
              className=""
              alt="Logo"
              src={'/../public/logo.png'}
              width={40}
              height={40}
            />
        <h1 className='text-4xl'>Entre páginas</h1>
        </div>
        <div>
          {/* <Search /> */}
        </div>
        <div className='mx-auto px-4 flex flex-col gap-4'>
          <h2 className='text-3xl text-center my-8'>Top libros más recomendados</h2>
        <BookCard />
        <BookCard />
        <BookCard />
        </div>
        <div className='mx-auto px-4 mb-20'>
          <h2 className='text-3xl text-center my-8'>Reseñas de los lectores</h2>
          <Review />
        </div>
        <MenuMobile />
      </main>

    </div>
  )
}

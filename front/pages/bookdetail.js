import React from 'react'
import { useRouter } from 'next/router'
import { useGetBook } from '../services/hooks/booksApi'
import Book from '../ui/components/Book'

export default function Bookdetail () {
  const router = useRouter()
  const { id } = router.query
  const data = useGetBook(id)

  return (
    <div className="p-2 md:32 lg:48">
        {data?.book.volumeInfo
          ? <Book>{data}</Book>
          : null}
    </div>
  )
}

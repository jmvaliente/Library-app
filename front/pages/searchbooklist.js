import React from 'react'
import BookCard from '../ui/components/BookCard'
import { useRouter } from 'next/router'
import { useGetBooks } from '../services/hooks/booksApi'

function naviteTo (id, router) {
  router.push('/bookdetail?id=' + id)
}

export default function SearchBookList () {
  const router = useRouter()
  const { id } = router.query
  const dataV2 = useGetBooks(id)
  const datos = dataV2.books.items
  return (
    <div className="p-2 md:32 lg:48">
    {dataV2?.books.items
      ? <div>{
        datos.map((item, index) => (
          <span
              className="text-gray-700 border-l-2 mr-3 border-slate-800 pl-1"
              key={index}
          > <button onClick={(event) => { naviteTo(dataV2.books.items[index].id, router) } } > <BookCard>{dataV2.books.items[index]}</BookCard> </button>
          </span>
        ))
    }</div>
      : null}

</div>
  )
}

import React from 'react'
import BookCard from '../ui/components/BookCard'
import { useRouter } from 'next/router'
import { useGetBooks } from '../services/hooks/booksApi'

function naviteTo (id, router) {
  router.push('/bookdetail?id=' + id)
}

export default function SearchBookList () {
  const router = useRouter()
  // Get id from URL '/searchbooklist?id=TEST' -- id = TEST
  const { id } = router.query
  const dataOrigin = useGetBooks(id)
  const dataList = dataOrigin?.books?.items ?? []
  return (
    <div className="p-2 md:32 lg:48">
    {dataList
      ? <div>{
        dataList?.map((item, index) => (
          <span
              className="text-gray-700 border-l-2 mr-3 border-slate-800 pl-1"
              key={index}
          > <button onClick={(event) => { naviteTo(item.id, router) } } > <BookCard>{item}</BookCard> </button>
          </span>
        ))
    }</div>
      : <></>}

</div>
  )
}

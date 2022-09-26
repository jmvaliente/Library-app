import { useState, useEffect } from 'react'

const URL = 'https://www.googleapis.com/books/v1'

export const useGetBooks = (title) => {
  const [books, setBooks] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    fetch(`${URL}/volumes?q=${title}`)
      .then(data => {
        setLoading(true)
        return data.json()
      })
      .then((data) => {
        setLoading(false)
        setBooks(data)
      })
      .catch(error => setError(error))
  }, [])

  return {
    books, loading, error
  }
}

export const useGetBook = (id) => {
  const [books, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    fetch(`${URL}/volumes/${id}`)
      .then(data => {
        setLoading(true)
        return data.json()
      })
      .then((data) => {
        setLoading(false)
        setBook(data)
      })
      .catch(error => setError(error))
  }, [])

  return {
    books, loading, error
  }
}

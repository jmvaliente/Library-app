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
  }, [title])

  return {
    books, loading, error
  }
}

export const useGetBook = (id) => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    if (id) {
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
    }
  }, [id])

  return {
    book, loading, error
  }
}

export const useGetBookISBN = (isbn) => {
  const [books, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    fetch(`${URL}/volumes?q=isbn:${isbn}`)
      .then(data => {
        setLoading(true)
        return data.json()
      })
      .then((data) => {
        setLoading(false)
        setBook(data)
      })
      .catch(error => setError(error))
  }, [isbn])
  return {
    books, loading, error
  }
}

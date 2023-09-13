import Header from './Componants/Header/Header'
import Blogs from './Componants/Blogs/Blogs'

import './App.css'
import BookMarks from './Componants/BookMarks/BookMarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const addToBookmarks = blog =>{
       const setNewBookmark = [...bookmarks,blog]
       setBookmarks(setNewBookmark)
  }
const handleMarksRead = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    //console.log('remove book marks',id)

    const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remaining)
}
  return (
    <>
       <Header></Header>
        <div className='md:flex max-w-5xl mx-auto'>
        <Blogs addToBookmarks={addToBookmarks} handleMarksRead={handleMarksRead}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
        </div>

    </>
  )
}

export default App

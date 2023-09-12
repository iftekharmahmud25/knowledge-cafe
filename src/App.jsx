import Header from './Componants/Header/Header'
import Blogs from './Componants/Blogs/Blogs'

import './App.css'
import BookMarks from './Componants/BookMarks/BookMarks'

function App() {


  return (
    <>
       <Header></Header>
        <div className='md:flex'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
        </div>

    </>
  )
}

export default App

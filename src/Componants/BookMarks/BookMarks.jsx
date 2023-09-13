import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 px-10 mt-14'>
            <div>
                <h2 className='text-2xl text-pink-500 text-center'>Reading Time : {readingTime}</h2>
            </div>
            <h2 className='text-2xl text-pink-500 text-center'>BookMarked Blog : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark)=> <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default BookMarks;
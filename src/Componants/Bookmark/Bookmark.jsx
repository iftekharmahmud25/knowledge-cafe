import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl '>
            <h3 className="text-2xl text-pink-500">{title}</h3>
        </div>
    );
};

export default Bookmark;
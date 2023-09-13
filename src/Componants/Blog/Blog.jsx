import PropTypes from 'prop-types'; 
import { FaBookmark} from 'react-icons/fa';



const Blog = ({blog,addToBookmarks,handleMarksRead}) => {
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
         

            <img className=' w-[500px] rounded-md' src={cover} alt={`Cover picture of the cover ${title}`} />
            <h2 className="text-3xl">{title}</h2>
            <div className='flex justify-between items-center'>
                <div className='flex '>
                   <img className='w-[60px] rounded-full mb-3' src={author_img} alt="" />

                   <div className='ml-4 '>
                        <h5>{author}</h5>
                        <p>{posted_date}</p>
                   </div>
                </div>
                <div>
                    <span>{reading_time}Min read</span>
                    <button onClick={()=>addToBookmarks (blog)} className='text-green-300 ml-2 text-lg'><FaBookmark></FaBookmark></button>
                </div>
            </div>




            <p>
                {
                    hashtags.map((hash)=> <span className='px-1 text-pink-400'><a href="">#{hashtags}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarksRead(id,reading_time)} className='underline text-pink-500'>Mark As Read</button>
        </div>
    );
};




Blog.propTypes = {
    blog : PropTypes.object.isRequired
}
export default Blog;
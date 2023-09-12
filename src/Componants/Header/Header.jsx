import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between bg-pink-500 items-center p-4 mx-4 '>
             <h1 className='text-2xl  font-bold'>Knowledge Cafe</h1>
             <img src={Profile} alt="" />
        </header>
    );
};

export default Header;
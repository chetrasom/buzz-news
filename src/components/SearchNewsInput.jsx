import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

const SearchNewsInput = ({ closeSidebar }) => {
    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();

    const searchKeywords = (e) => {
        e.preventDefault()

        if(!keywords) {
            navigate('/')
            setKeywords("")
        }
        else {
            navigate(`/search?q=${keywords}`)
        }
    }

    return (
        <div className='w-full'>
            <form onSubmit={searchKeywords}>
                <div className='group border rounded-md flex items-center gap-x-2 h-12 overflow-hidden'>
                    <input 
                        type="text" 
                        name="text" 
                        id="text" 
                        placeholder='e.g. sports'
                        className='h-full px-4 focus:outline-none'
                        autoComplete='off'
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)} 
                    />
                    <button
                        aria-label='search news'
                        className='h-full px-2'
                        onClick={closeSidebar}
                    >
                        <FaSearch className='text-gray-400 hover:text-secondary' />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchNewsInput;

SearchNewsInput.propTypes = {
    closeSidebar: PropTypes.any
}
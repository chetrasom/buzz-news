import { HeadingTitle } from '../components';

const LatestNewsletter = () => {
    return (
        <>
            <HeadingTitle title='newsletter' />
            <div>
                <form className='w-full shadow-lg bg-white px-2 py-5 lg:px-5 lg:py-10'>
                    <h4 className='text-xl font-bold pb-2'>The most important world news and events of the day.</h4>
                    <p className='pb-4'>Get magzrenvi daily newsletter on your inbox.</p>
                    <div className='h-12 flex items-center'>
                        <input 
                            type="text" 
                            name="text" 
                            id="text"
                            placeholder='Your email address'
                            className='focus:outline-none w-full h-full border px-4 rounded-tl-sm rounded-bl-sm'
                            autoComplete='off'
                        />
                        <button
                            className='max-w-max w-full h-full px-4 bg-secondary rounded-tr-sm rounded-br-sm font-medium text-white'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LatestNewsletter
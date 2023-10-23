import { ArticleNews, AsideNews } from '../components';

const WrapperNews = () => {
    return (
        <section className='pb-12'>
            <div className="container">
                <div className='grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-5 lg:gap-x-10'>
                    <section className='md:col-span-2'>
                        <ArticleNews />
                    </section>
                    <aside>
                        <AsideNews />
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default WrapperNews
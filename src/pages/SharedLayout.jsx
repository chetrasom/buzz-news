import { Outlet } from "react-router-dom"
import { Header, MobileSidebar, Footer, ScrollToTopLink, ScrollTop } from '../components';

const SharedLayout = () => {
    return (
        <>
            <Header />
            <MobileSidebar />
            <main className="pt-[75px] md:pt-[80px] lg:pt-[85px]">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopLink />
            <ScrollTop />
        </>
    )
}

export default SharedLayout
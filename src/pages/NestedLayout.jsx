import { Outlet, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { menu } from "../utils/constants";
import { HeadingTitle, RecentNews, PopularNews, BreadCrumb } from "../components";

const NestedLayout = () => {
    const [pageHeadingTitle, setPageHeadingTitle] = useState('home');

    let location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        const ChangePageHeadingTitle = () => {
            const test = menu.find((item) => item.url === pathname);
            const result = test?.name;

            if (!result) {
                setPageHeadingTitle('search information');
                return
            }

            setPageHeadingTitle(result);
        }

        ChangePageHeadingTitle();

    }, [pathname]);

    return (
        <section className="pt-5 md:pt-2 lg:pt-4">
            <div className="container">

                <div className="pb-5">
                    <BreadCrumb title={pathname} />
                </div>

                <HeadingTitle title={pageHeadingTitle} />

                <div className="grid grid-cols-1 gap-y-5 md:gap-y-10 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 mt-5">

                    <div className="col-span-2">
                        <Outlet />
                    </div>

                    <aside className="space-y-10">
                        <div>
                            <RecentNews />
                        </div>
                        <div>
                            <PopularNews />
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    )
}

export default NestedLayout
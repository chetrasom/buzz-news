import { useRouteError, Link, useNavigate } from "react-router-dom"
import { AiOutlineHome } from 'react-icons/ai';
import { PiSmileySadLight } from 'react-icons/pi';

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const refreshPage = () => {
        navigate(0);
    };

    if (error.status === 404) {
        return (
            <section className="w-full h-screen grid place-content-center place-items-center">
                <div className="container text-center">
                    <h1 className="text-9xl">{error.status}</h1>
                    <h3 className="mb-3">Page {error.statusText}</h3>
                    <p>Sorry, but the page you were trying to view does not exist</p>
                    <Link to="/" className="btn-link btn-flex btn-sm btn-max bg-secondary">
                        <AiOutlineHome className="text-lg" />
                        Back to Homepage
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full h-screen grid place-content-center place-items-center">
            <div className="container text-center">
                <div><PiSmileySadLight className="mx-auto text-8xl text-accent" /></div>
                <h2 className="mb-3">Something went wrong.</h2>
                <p className="mb-4">We can&apos;t get that information right now. Please try again later.</p>
                <button
                    type="button"
                    aria-label="refresh page"
                    onClick={refreshPage}
                    className="btn btn-sm bg-accent"
                >
                    Refresh the page
                </button>
            </div>
        </section>
    )
}

export default Error
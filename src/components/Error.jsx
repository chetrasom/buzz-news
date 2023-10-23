import PropTypes from 'prop-types';

const Error = ({ message }) => {
    return (
        <div className="h-[250px] flex justify-center items-center">
            <h3 className="text-gray-700">{message}</h3>
        </div>
    )
}

export default Error;

Error.propTypes = {
    message: PropTypes.string
}
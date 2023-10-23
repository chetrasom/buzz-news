import { RotatingLines } from "react-loader-spinner"

const Loading = () => {
    return (
        <div className="h-[250px] flex justify-center items-center">
            <RotatingLines
                strokeColor="#f87171"
                strokeWidth="5"
                animationDuration="0.75"
                width="72"
                visible={true}
            />
        </div>
    )
}

export default Loading
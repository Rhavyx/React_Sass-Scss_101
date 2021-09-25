import React from "react"


interface LoadingProps {
    count: number
}

const Loading: React.FC<LoadingProps> = (props) => {

    return (
        <div className="loading">
            <div className="circle">
                <svg className="circle__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle__svg-circle" cx="50" cy="50" r="45" />
                </svg>
                <div className="text">
                    <p className="counter">{props.count}</p>
                </div>
            </div>
        </div>
    );
}

export default Loading;
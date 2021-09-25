import React from "react";

const SassTricks: React.FC = () => {

    return (
        <div className="App">
            <div className="header">
                <div className="headerItem">
                    this is the header item 1
                </div>
                <div className="headerItem">
                    this is the header item 2
                </div>
                <div className="headerItem">
                    this is the header item 3
                </div>
            </div>
            <div className="parent">
                <div className="child1">
                    child element 1
                </div>
                <div className="child2">
                    child element 2
                </div>
                <div className="child3">
                    child element 3
                </div>
            </div>
            <div className="main-body">
                Media Query
            </div>
        </div>
    );
}

export default SassTricks;
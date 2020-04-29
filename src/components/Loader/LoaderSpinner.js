import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

const LoaderSpinner = (props) => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        <div>
            {promiseInProgress === true ? (
                <Loader
                    type="Puff"
                    color="#5abf2f"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            ) : null}
        </div>
    );
};
export default LoaderSpinner;

export const LoadingScreen = () => {
    return (
        <div className="container d-flex justify-content-center loading-center">
            <div className="spinner-grow" role="status" style={ {
                color: '#4f5b66'
            } } >
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
};

import "./app-info.css";

const AppInfo = ({books, wanted, isreading, isfinished}) => {
    return (
        <div className="app-info">
            <h1>Ma Petite Librarie</h1>
            <h2>Books total: {books}</h2>
            <h2>Want to read: {wanted}</h2>
            <h2>Reading now: {isreading}</h2>
            <h2>Finished to read: {isfinished}</h2>
        </div>
    )
}

export default AppInfo;
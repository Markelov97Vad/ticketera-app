type MapProps = {
    className?: string;
    map?: string;
}

function Map({className, map} : MapProps) {

    return(
        <iframe src={map} className={className}></iframe>
    )
}

export default Map;
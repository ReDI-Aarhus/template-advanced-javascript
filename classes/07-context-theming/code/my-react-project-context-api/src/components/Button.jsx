﻿
function MovieList(props) {
    return (
        <div className="flex">
            {props.children}
        </div>
    );
}

export default MovieList;
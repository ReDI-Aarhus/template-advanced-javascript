import {  useNavigate } from 'react-router-dom';

function GoToHome() {
    const navigate = useNavigate();

    function doStuffAndNavigate() {
        alert('Phone Home!');
        navigate('/');
    }
    return (
        <button onClick={() => doStuffAndNavigate()}>Go to Home</button>
    )
}

export default GoToHome;
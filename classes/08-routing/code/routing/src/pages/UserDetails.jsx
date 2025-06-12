import { useParams } from "react-router-dom";

function UserDetails() {
    const { id } = useParams();
    return <h2>user detail: { id } </h2>
}

export default UserDetails;
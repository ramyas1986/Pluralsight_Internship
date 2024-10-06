import { useContext } from "react";
import { UserContext } from "../App";


function ComponentC() {
    const {user} = useContext(UserContext);
    return (
        <div>
            {user.username}
        </div>
    )
}

export default ComponentC
import Login from "../components/Login";
import Registration from "../components/Registration";

const LogReg = (props) => {

    const setLoginUser = props;

    return (
        <div>
            <Login setLoginUser={setLoginUser} />
            <Registration />
        </div>
    )
}

export default LogReg;
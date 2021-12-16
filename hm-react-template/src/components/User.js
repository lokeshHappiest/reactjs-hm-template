import { useSelector, useDispatch } from "react-redux";
import { getUser, login, logout } from "../redux/user/UserSlice";

const User = (props) => {
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = user !== undefined;
  console.log("user = ", user);
  console.log("isLoggedIn = ", isLoggedIn);
  const dispatch = useDispatch();
  const loginBtnText = isLoggedIn ? "Logout" : "Login";
  const userPayload = {
    name: "Lokesh",
    designation: "Senior technical lead",
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log();
          isLoggedIn ? dispatch(logout()) : dispatch(getUser());
        }}
      >
        {loginBtnText}
      </button>
      <div>
        {isLoggedIn
          ? `Welcome ${user.name}, ${user.designation}`
          : "Please Login by clicking on Login Button"}
      </div>
    </div>
  );
};

export default User;

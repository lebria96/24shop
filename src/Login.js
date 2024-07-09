import { useNavigate } from "react-router-dom";
import "./App.css";
import Profile from "./assets/images/66.jpg";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="text-center">

        <img src={Profile} alt="profile_image" className="profile" />
        <label className="label text-start">username</label>
        <input type="text" className="input" />
        <label className="label text-start">password</label>
        <input type="password" className="input" />

        <input
          type="button"
          value="Login"
          className="button"
          onClick={() => {
            navigate("/home");
          }}
          />
          </div>
      </div>
    </>
  );
}

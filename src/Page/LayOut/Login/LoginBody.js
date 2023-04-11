import LoginForm from "../../../components/Login/LoginForm";
import style from "../../../CSS/LoginPage.module.css";
const LoginBody = () => {
  return (
    <div className={style.body}>
      <LoginForm />
    </div>
  );
};

export default LoginBody;

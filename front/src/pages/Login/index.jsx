import { useForm } from "react-hook-form";
import { useGuard, useLogin } from "../../hooks";
import { login } from "../../misc/templates";

const Login = () => {
  const { register, formState, handleSubmit } = useForm();
  const doLogin = useLogin();
  useGuard();

  const { errors, email, password } = login;

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(doLogin)}>
        <label htmlFor="email">email</label>
        <br />
        <input
          {...{ ...email.props, ...register("email", email.validation) }}
        />
        <p>{errors[formState.errors?.email?.type]}</p>

        <label htmlFor="password">password</label>
        <br />
        <input
          {...{
            ...password.props,
            ...register("password", password.validation),
          }}
        />
        <p>{errors[formState.errors?.password?.type]}</p>

        <input type="submit" />
      </form>
    </section>
  );
};

export default Login;

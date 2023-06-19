import { useForm } from "react-hook-form";
import { useGuard, useSignup } from "../../hooks";
import { signup } from "../../misc/templates";

const Signup = () => {
  const { register, formState, handleSubmit } = useForm();
  const doSignup = useSignup();
  useGuard();

  const { errors, email, username, password } = signup;

  return (
    <section>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit(doSignup)}>
        <label htmlFor="email">email</label>
        <br />
        <input
          {...{ ...email.props, ...register("email", email.validation) }}
        />
        <p>{errors[formState.errors?.email?.type]}</p>

        <label htmlFor="username">username</label>
        <br />
        <input
          {...{
            ...username.props,
            ...register("username", username.validation),
          }}
        />
        <p>{errors[formState.errors?.username?.type]}</p>

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

export default Signup;

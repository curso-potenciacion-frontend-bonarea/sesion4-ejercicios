import Form from "@/forms/components/Form";

const LoginForm = (): React.ReactElement => {
  return (
    <>
      <p>Please enter your credentials</p>
      <Form>
        <div className="form__group">
          <label htmlFor="username" className="form__label">
            Your username:
          </label>
          <input type="text" id="username" className="form__control" />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Your password:
          </label>
          <input type="password" id="password" className="form__control" />
        </div>
        <div className="form__group">
          <button className="button">Send</button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;

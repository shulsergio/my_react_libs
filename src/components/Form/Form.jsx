import css from "./Form.module.css"
export default function Form() {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };

    return (
      <div className={css.formBlock}>
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
</div>  );

};
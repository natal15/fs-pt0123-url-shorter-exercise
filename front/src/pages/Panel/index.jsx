import { useUser } from "../../hooks";

const Panel = () => {
  const { data } = useUser();

  return (
    <section>
      <h1>Panel Page</h1>
      <h3>Hello, {data?.username}</h3>
      <p>(Unprotected route)</p>
    </section>
  );
};

export default Panel;
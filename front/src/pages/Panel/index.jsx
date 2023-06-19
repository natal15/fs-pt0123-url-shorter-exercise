import { useUser } from "../../hooks";

const Panel = () => {
  const { data } = useUser();

  return (
    <section>
      <h1>Panel</h1>
      <h3>Hello, {data?.username}</h3>
      
    </section>
  );
};

export default Panel;
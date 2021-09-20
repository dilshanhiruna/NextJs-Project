import styles from "../../styles/todo.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Index = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map((users) => (
        <Link href={"/todo/" + users.id} key={users.id}>
          <a className={styles.single}>
            <h3>{users.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Index;

import Link from 'next/link';
import styles from '../../styles/Nike.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return{
    props: {items: data}
  }
}

const Ninjas = ({items}) => {
  return (
    <div>
      <h1>All Users List</h1>
      {
        items.map(item => (
          <Link href={`/users/${item.id}`} key={item.id}>
            <a className={styles.single}>
              <h3>{item.name}</h3>
            </a>
          </Link>
        ))
      }
    </div>
  );
};

export default Ninjas;

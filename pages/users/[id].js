export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: {items: data}
  }
}

const Details = ({items}) => {
  return (  
    <div>
      <h1>{items.name}</h1>
      <p>{items.email}</p>
      <p>{items.website}</p>
      <p>{items.address.city}</p>
    </div>
    
  );
}
 
export default Details;
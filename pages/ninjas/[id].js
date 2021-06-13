// [id] - changeable value because of []

export const getStaticPaths = async () => { // is async because need to fetch all the data
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
  
    return {
        paths, // paths: paths - short paths
        fallback: false
    }
}

export const getStaticProps = async (context) => { // runs 10 times
    const id = context.params.id // each time different id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json() // single object
  
    return {
        props: { ninja: data }
    }
  }
  
const Details = ({ ninja }) => {
    return (
        <div>
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
    );
}
  
  export default Details;
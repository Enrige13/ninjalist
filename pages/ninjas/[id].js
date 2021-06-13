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
  
  const Details = () => {
    return (
      <div>
        <h1>Details Page</h1>
      </div>
    );
  }
  
  export default Details;
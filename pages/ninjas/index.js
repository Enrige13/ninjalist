// localhost:3000/folder/ - creates root path only with (index.js)
import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => { // run at build time - before component is rendered, never write code witch renders in the browser
  const res = await fetch('https://jsonplaceholder.typicode.com/users') // await because it is async
  const data = await res.json()

  return { // return value object
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </div>
  )
}
 
export default Ninjas
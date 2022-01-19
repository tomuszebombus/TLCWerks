import Head from "next/head";
// import styles from '../../styles/directory.module.scss'
// import styles from './styles.scss'
// import styles from '../../styles/globals.scss'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: { werkers: data }
  }
}

const Employees = ({ werkers }) => {
  return (
    <div>
    <Head>
         <title>TLCWerks | Contact</title>
         <link rel="icon" href="/Apple logo icon - 32.png" />
         </Head>

      <h1>
      Directory
      </h1>
      {werkers.map(werkers => (
        <div key={werkers.id}>
        <a className='werkers'>
          <h3>{ werkers.name }</h3>
        </a>
        </div>
      ))}
    </div>
  )
}
export default Employees;
import styles from './Landing.module.css'
import Profile from '../../components/Profile/Profile'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      <Profile />
      <h1>
        Todays Top Hacks
      </h1>
    </main>
  )
}
 
export default Landing
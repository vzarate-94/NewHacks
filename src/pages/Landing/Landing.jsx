import styles from './Landing.module.css'
import Profile from '../../components/Profile/Profile'
import DarkMode from '../../components/DarkMode/DarkMode'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      <Profile />
      <DarkMode />
      <h1>
        Todays Top Hacks
      </h1>
    </main>
  )
}
 
export default Landing
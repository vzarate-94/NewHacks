import styles from './Landing.module.css'
import Profile from '../../components/Profile/Profile'
import DarkMode from '../../components/DarkMode/DarkMode'
import Feed from '../../components/Feed/Feed'

const Landing = () => {
  return (
    <main className={styles.container}>
      <h1>
        Todays Top Hacks
      </h1>
      <Profile />
      <DarkMode />
      <Feed />
    </main>
  )
}
 
export default Landing
import styles from './Landing.module.css'
import Profile from '../../components/Profile/Profile'
import DarkMode from '../../components/DarkMode/DarkMode'
import Feed from '../../components/Feed/Feed'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      <Profile />
      <DarkMode />
      <Feed />
      <h1>
        Todays Top Hacks
      </h1>
    </main>
  )
}
 
export default Landing
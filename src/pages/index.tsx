import styles from '../styles/pages/Home.module.css';

import Head from 'next/head'
import { ProfileBox } from '../components/ProfileBox'
import { ProfileContext, ProfileProvider } from '../contexts/ProfileContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <ProfileProvider>
        <ProfileBox />
      </ProfileProvider>

    </div>
  )
}

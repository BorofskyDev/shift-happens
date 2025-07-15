import { Heading } from '@/components/ui'
import styles from './SplashPageComponent.module.scss'

export function SplashPageComponent() {
  return (
    <main className={`${styles.page} ${styles.splashPage}`}>
      <Heading as='h1' variant='page'>
        Shift Happens
      </Heading>
    </main>
  )
}

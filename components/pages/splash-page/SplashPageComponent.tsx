import { ActionButton, BodyText, GeneralInput, Heading } from '@/components/ui'
import { PageContainer } from '@/components/layouts'
import styles from './SplashPageComponent.module.scss'

export function SplashPageComponent() {
  return (
    <PageContainer className={styles.splashPage}>
      <Heading as='h1' variant='page'>
        Shift Happens
      </Heading>
      <BodyText>
        Punch in. Stack up. Cash out. (Or just check your stats, we won&apos;t
        judge)
      </BodyText>
      <form className={`${styles.generalForm} ${styles.splashForm}`}>
        <Heading as='h2' variant='form-title' className={styles.heading}>
          get in the game
        </Heading>
        <GeneralInput label='Email' type='email' />
        <GeneralInput label='Password' type='password' />
        <ActionButton variant='primary' className={styles.btn}>Let&apos;s Go!</ActionButton>
      </form>
    </PageContainer>
  )
}

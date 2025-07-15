import { PageContainer } from '@/components/layouts'
import styles from './ProfilePageComponent.module.scss'
import { BodyText, Heading, Icon, icons } from '@/components/ui'

export function ProfilePageComponent() {
  return (
    <PageContainer className={styles.profilePage}>
      <Heading as='h1' variant='page'>
        Welcome, Name
      </Heading>
      <BodyText variant='body-lg'>Get your shift together!</BodyText>
      <section
        id='rules'
        className={`${styles.sectionContainer} ${styles.rulesSection}`}
      >
        <Heading as='h2' variant='section'>
          The Rules of the Game
        </Heading>
        <ul className={styles.rulesList}>
          <li className={styles.ruleItem}>
            <div className={styles.ruleHeader}>
              <Icon
                icon={icons.credit}
                className={styles.ruleIcon}
                viewBox='0 0 64 64'
              />
              <BodyText variant='body-lg'>Credit App?</BodyText>
            </div>
            <BodyText>Thassa punch.</BodyText>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.ruleHeader}>
              <Icon
                icon={icons.anime}
                className={styles.ruleIcon}
                viewBox='0 0 64 64'
              />
              <BodyText variant='body-lg'>Survey Shoutout?</BodyText>
            </div>
            <BodyText>Punch.</BodyText>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.ruleHeader}>
              <Icon
                icon={icons.soda}
                className={styles.ruleIcon}
                viewBox='0 0 64 64'
              />
              <BodyText variant='body-lg'>5 Punches?</BodyText>
            </div>
            <BodyText>Free drink & snack!</BodyText>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.ruleHeader}>
              <Icon
                icon={icons.giftCard}
                className={styles.ruleIcon}
                viewBox='0 0 64 64'
              />
              <BodyText variant='body-lg'>10 Punches?</BodyText>
            </div>
            <BodyText>$20 gift card!!!</BodyText>
          </li>
        </ul>
      </section>
    </PageContainer>
  )
}

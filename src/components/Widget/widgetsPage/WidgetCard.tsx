import Image from 'next/image';
import Link from 'next/link';
import { ButtonOutline, Card } from 'moralis-ui';
import { Trans } from '@lingui/react/macro';
import styles from './WidgetCard.module.scss';

export const WidgetCard = ({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => {
  return (
    <Link href={link} className={styles.link}>
      <Card transparent className={styles.card}>
        <div className={styles.iconHolder}>
          <Image src={image} alt={title} width={600} height={230} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <Link href={link} className={styles.link}>
            <ButtonOutline size="sm">
              <Trans>Configure Widget</Trans>
            </ButtonOutline>
          </Link>
        </div>
      </Card>
    </Link>
  );
};

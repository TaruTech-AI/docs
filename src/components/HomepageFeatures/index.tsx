import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Science-Based',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Human-like Playtesting, Powered by AI.
        <p>Gather player insights from a wide spectrum of player behaviors, at scale, in minutes, and at a fraction of the cost.</p>
      </>
    ),
  },
  {
    title: 'Advanced Custom AI Models',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our highly efficient models are designed and trained specifically for each game, learning to replicate a full range of human playstyles, ensuring simulations that reflect real-world behavior with accuracy and depth.
      </>
    ),
  },
  {
    title: 'Simulated Player Populations',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our system simulates player populations with varied skill, persistence and boredom tolerance. Understand how different types of players will progress, churn, or thrive across your levels.
      </>
    ),
  },
  {
    title: 'Predict KPIs Before Launch',
    Svg: require('@site/static/img/undraw_time-management_4ss6.svg').default,
    description: (
      <>
          <p>Pass Rate (difficulty)</p>
          <p>Churn Rate (retention)</p>
          <p>Action Completion (abipty usage, strategy)</p>
          <p>Engagement (frustration vs fun balance)</p>
      </>
    ),
  },
    {
    title: 'Built for Developers',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>Integrate easily with your existing workflows and tools.</p>
        <p>Seamless Integration</p>
      </>
    ),
  },
    {
    title: 'Minimal Setup. Maximum Insight.',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>Streamline game design and balancing.</p>
        <p>Simulate diverse playstyles.</p>
        <p>Deliver higher-quality games faster.</p>
        <p>Identify frustration points before launch.</p>
        <p>Improve retention, engagement and monetization.</p>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

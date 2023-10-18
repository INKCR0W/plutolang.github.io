import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '新语法',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Pluto 实现了 Lua 中缺失的各种流行语法。
      </>
    ),
  },
  {
    title: '优化',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Pluto 稍微比 Lua 快，且在某些情况下速度差距相当大。
      </>
    ),
  },
  {
    title: '更多的标准库',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Pluto 的目标是达到 Python 的标准库水平，而且正在逐步接近这个目标。
      </>
    )
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

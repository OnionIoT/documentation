import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function getActionLinkProps(action) {
  if (!action) {
    return null;
  }

  const props = {
    children: action.label || 'View docs',
  };

  if (action.to) {
    props.to = action.to;
  } else if (action.href) {
    props.href = action.href;
  } else {
    return null;
  }

  if (action.newTab || (!!props.href && props.href.startsWith('http'))) {
    props.target = '_blank';
    props.rel = 'noreferrer noopener';
  }

  return props;
}

function ProductCard({product}) {
  const {
    name,
    description,
    highlights = [],
    badge,
    status,
    comingSoon,
    image,
    action,
    secondaryAction,
  } = product;

  const actionProps = getActionLinkProps(action);
  const secondaryActionProps = getActionLinkProps(secondaryAction);
  const imageSrc = image?.src ? useBaseUrl(image.src) : null;
  const isActionDisabled = comingSoon || !actionProps;

  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div>
            <p className={styles.overline}>Documentation</p>
            <h3 className={styles.cardTitle}>{name}</h3>
          </div>
          {(badge || comingSoon) && (
            <span className={clsx(styles.badge, comingSoon && styles.badgeMuted)}>
              {comingSoon ? 'Coming soon' : badge}
            </span>
          )}
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {imageSrc && (
          <div className={styles.figureWrapper}>
            <img src={imageSrc} alt={image?.alt || ''} loading="lazy" />
          </div>
        )}
        {!!highlights.length && (
          <ul className={styles.highlightList}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {(status && !comingSoon) && <p className={styles.status}>{status}</p>}
      </div>
      <div className={styles.cardFooter}>
        {isActionDisabled ? (
          <span className={clsx('button button--secondary button--block', styles.disabledButton)}>
            {comingSoon ? 'Documentation in progress' : 'Not available yet'}
          </span>
        ) : (
          <Link className={clsx('button button--primary button--block', styles.primaryButton)} {...actionProps}>
            {actionProps.children}
          </Link>
        )}
        {secondaryActionProps && (
          <Link className={clsx('button button--link button--block', styles.secondaryLink)} {...secondaryActionProps}>
            {secondaryActionProps.children}
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ProductSelector({products = []}) {
  if (!products.length) {
    return null;
  }

  return (
    <section className={styles.selectorSection}>
      <div className={styles.selectorGrid}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

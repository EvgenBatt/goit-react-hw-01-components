import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/Statistics/StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(({ id, percentage, label, index }) => (
            <li className={css.item} key={id} index={index}>
              <StatisticsItem percentage={percentage} label={label} />
            </li>
          ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

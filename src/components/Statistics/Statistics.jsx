import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/Statistics/StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css['stat-list']}>
        {stats.map(({ id, percentage, label }) => (
          <li className={css.item} key={id}>
            <StatisticsItem percentage={percentage} label={label} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

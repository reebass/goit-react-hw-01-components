import PropTypes from 'prop-types';


export const Statistics = ({stats, title}) => {
    return (
    <section className="statistics">
    {title.length > 0 && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
    {stats.map(({id, label, percentage}) => (    
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>))}
  </ul>
</section>
    )
}

Event.PropTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired)
  
  };
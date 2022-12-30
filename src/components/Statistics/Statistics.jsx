import PropTypes from 'prop-types';

Event.PropTypes = {
    // title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      performance: PropTypes.number.isRequired,
    })),
  
  };

export const Statistics = ({data}) => {
    return (
        <section className="statistics">
            {data.map(({id, percentage, label}) => {
            <ul key={id} className="stat-list">
            <li className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
            <li className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
            <li className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
            <li className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          </ul>
        })}
        
      </section>)  
}
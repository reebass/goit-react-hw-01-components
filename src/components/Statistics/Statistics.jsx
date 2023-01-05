import PropTypes from 'prop-types';
import { Container , Item, Label, List, Percentage, Title } from './Statistics.styled';

export const Statistics = ({stats, title}) => {
    return (
    <Container  className="statistics">
    {title && <Title className="title">{title}</Title>}
    <List className="stat-list">
    {stats.map(({id, label, percentage}) => (    
    <Item RandomColor={getRandomHexColor()} key={id} className="item">
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>
    </Item>))}
  </List>
</Container>
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
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
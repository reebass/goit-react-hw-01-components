import PropTypes from 'prop-types';
import { Avatar, Card, Description, Tag, UserName, Location, Stats, StatsItem, StatsItemLabel, StatsItemQuantity } from './Profile.styled'

Event.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })

};

export const Profile = ({user: { username, tag, location, avatar, stats: {followers, views, likes}}}) => {
  return (
    <Card className="profile">
      <Description className="description">
        <Avatar
          src={avatar}
          alt={username}
          className="avatar"
        />
        <UserName className="name">{username}</UserName>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats className="stats">
        <StatsItem>
          <StatsItemLabel className="label">Followers</StatsItemLabel>
          <StatsItemQuantity className="quantity">{followers}</StatsItemQuantity>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel className="label">Views</StatsItemLabel>
          <StatsItemQuantity className="quantity">{views}</StatsItemQuantity>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel className="label">Likes</StatsItemLabel>
          <StatsItemQuantity className="quantity">{likes}</StatsItemQuantity>
        </StatsItem>
      </Stats>
    </Card>
  );
};

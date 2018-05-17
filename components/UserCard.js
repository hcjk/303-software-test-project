import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUserCard = styled.div`
  padding: 24px;
  font-family: sans-serif;
`;

const UserCard = ({ person: { name, height, mass, gender }}) => (
  /* eslint-disable */
  <StyledUserCard>
    <h3>{name}</h3>
    <p><b>Height:</b> {height}</p>
    <p><b>Height:</b> {height}</p>
  </StyledUserCard>
  /* eslint-enable */
);

UserCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
};

export default UserCard;

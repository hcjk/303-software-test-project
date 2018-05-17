import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box from 'react-box-size';

const StyledUserCard = styled.div`
  border: solid 1px #eee;
  border-radius: 4px;
  margin: 16px 32px;
  h3 {
    color: #111;
    font-size: 24px;
  }
`;

const UserCard = ({
  person: {
    name, height, mass, gender,
  },
}) => (
  /* eslint-disable */
  <StyledUserCard>
    <Box pv={3} ph={3}>
      <Box mb={2}>
        <h3>{name}</h3>
      </Box>
      <Box mb={1}>
        <b>Height:</b> {height}
      </Box>
      <Box mb={1}>
        <b>Mass:</b> {mass}
      </Box>
      <Box mb={1}>
        <b>Gender:</b> {gender}
      </Box>
    </Box>
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

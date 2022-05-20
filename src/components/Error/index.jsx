import styled from 'styled-components';
import colors from '../../utils/style/color';

const ErrorText = styled.p`
  font-size: 14px;
  color: ${colors.mediumGrey};
  line-height: 20px;
  padding: 12px;
`;

function Error() {
  return (
    <ErrorText>
      Nous avons rencontré une erreur, merci de vous reconnecter
      utlérieurement.👨‍💻🔧
    </ErrorText>
  );
}

export default Error;

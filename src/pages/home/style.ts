import styled from 'styled-components';

export const HomeWrapper = styled.div`
  color: ${(props) => props.theme.color.primary};
  size: ${(props) => props.theme.size.large};
  background-color: skyblue;

  ${(props) => props.theme.mixin.boxshadow}
`;

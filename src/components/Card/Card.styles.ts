import styled from 'styled-components';

export const Container = styled.div`
  border: ${(props) => props.theme.borders.sm};
  border-color: ${(props) => props.theme.palette.primary};
  box-shadow: ${(props) => props.theme.shadows.sm};
  border-radius: ${(props) => props.theme.radii.sm};
`;

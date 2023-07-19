import styled from 'styled-components';

export const CloseModal = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 4px solid black;
  padding: 0;
  size: 40px;
  background-color: inherit;
  cursor: pointer;
`;

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

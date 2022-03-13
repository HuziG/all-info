// @ts-ignore
import styled from 'styled-components';

export const ScrollContainer = styled.div`
  #scroll-container::-webkit-scrollbar {
    width: 10px;
    padding: 0 5px;
    background-color: #ccc;
  }

  #scroll-container::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 10px;
  }

  #scroll-container::-webkit-scrollbar-track {
    background-color: #20221f;
  }
`;

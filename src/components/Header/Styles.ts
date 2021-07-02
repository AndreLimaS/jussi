import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleMenuKeyFrame = styled.span`
  padding: 0 25px;
  cursor: pointer;
  animation: identifier 2.5s infinite;
  @keyframes identifier {
    0% {
    }
    50% {
      color: ${colors.green};
    }
    100% {
      color: ${colors.pink};
    }
  }
`;

export const TitleMenu = styled.span`
  padding: 0 25px;
  cursor: pointer;
  line-height: 24px;
  transition: 0.1s;
  :hover {
    transform: scale(1.05);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.gray};
  box-sizing: border-box;
  border-radius: 24px;
  padding: 8px 10px;
`;

export const InputSearch = styled.input`
  border: none;
  ::placeholder {
    color: ${colors.pink};
  }
`;

export const ImgTouch = styled.div`
  transition: 0.1s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

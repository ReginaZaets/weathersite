import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainText = styled.h2`
  text-align: center;
`;

export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ButtonNext = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #1b1b1b;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #ffffff;
  color: #1b1b1b;
  cursor: pointer;
`;
export const ButtonPrev = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #1b1b1b;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #ffffff;
  color: #1b1b1b;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SpinImage = keyframes`
 from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const WeatherImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const ListIte = styled.div`
  display: flex;
`;

export const MainItemWeather = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MainItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const MainItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;

import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 20px 20px 20px;
  gap: 100px;
  width: 500px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: white;
  @media (max-width: 768px) {
    width: 270px;
    font-size: 12px;
    gap: 30px;
    justify-content: flex-start;
    font-style: normal;
    font-weight: 400;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TempList = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ListenP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
    font-style: normal;
  }
`;

export const ListSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
    font-style: normal;
  }
`;

import styled from '@emotion/styled';

export const CardContainer = styled.div`
  height: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  
  overflow: hidden;
  
  border-radius: 16px;
  background-color: white;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05),
    0 36px 28px -7px rgba(0, 0, 0, 0.05), 0 17px 17px -7px rgba(0, 0, 0, 0.04);

  & > div {
    height: 100%;
  }
`;

export const AttractionImage = styled.img`
  min-height: 271px;
  max-height: 271px;
  margin-left: -16px;
  margin-right: -16px;

  object-fit: cover;
`;

export const Address = styled.p`
  color: #adb5bd;
  font-weight: 400;
`;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  font-weight: bold;
  
  margin-top: 12px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
`;

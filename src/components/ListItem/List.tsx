import React from "react";
import styled from "styled-components";

export interface ListProps {
  chargerName: string;
  serialNumber: string;
  chargerType: string;
  isActive: boolean;
  image?: any;
}
export const List = (props: ListProps) => {
  const { chargerName, isActive, serialNumber, chargerType, image } = props;
  return (
    <BoxWrapper>
      <TextWrapper>
        <ChargerName>{chargerName}</ChargerName>
        <SerialNumber>Serial No: {serialNumber}</SerialNumber>
        <ChargerType>{chargerType}</ChargerType>
        <ChargerStatus isActive={isActive}>
          {isActive ? "Active" : "Passive"}
        </ChargerStatus>
      </TextWrapper>
      <ImageWrapper>
        <Image src={image} alt="Company Logo"></Image>
      </ImageWrapper>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  position: relative;
  background-color: white;
  transition: box-shadow 0.1s;
  color: black;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  margin-top: 2rem;

  @media ${({ theme }) => theme.viewport.m} {
    flex-direction: row;
  }

  &:hover {
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  flex-grow: 1;
  text-align: left;
  justify-content: center;

  @media ${({ theme }) => theme.viewport.m} {
    padding: 0rem 2rem;
  }
`;

const SerialNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const ChargerName = styled.p`
  font-weight: bold;
  color: #666;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin: 0;
  display: inline-block;
`;

const ChargerType = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
`;

const ChargerStatus = styled.p<{ isActive: boolean }>`
  font-weight: 300;
  font-size: 0.9rem;
  color: ${({ isActive }) => (isActive ? "green" : "red")};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 60vw;

  & img {
    transition: transform 0.3s;
  }

  @media ${({ theme }) => theme.viewport.m} {
    width: 40%;
    min-height: unset;
    flex-shrink: 0;
  }
`;

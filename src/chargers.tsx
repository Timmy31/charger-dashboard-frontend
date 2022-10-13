import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "./components/Box/Box";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { List } from "./components/ListItem/List";
import { listCategories } from "./constants/categories";
import chargerGemini from "./img/go-e-charger-gemini.png";
import chargerHomePlus from "./img/go-echarger-homeplus.png";

interface ChargersPageProps {}

interface ChargersDataProps {
  name: string;
  serialNumber: string;
  description: string;
  chargerType: string;
  isActive: boolean;
  image: any;
}

export const ChargersPage = (_: ChargersPageProps) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/chargers`);

      if (response.status === 200) {
        let res = await response.json();
        console.log(res);

        setData(res.data);
      } else {
        throw "Error fetching data";
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContentWrapper>
      <Title>List of chargers</Title>
      <Subtitle>Show list of chargers connected to my account!</Subtitle>

      {data.length > 0 ? (
        <GridContainer>
          {data.map((charger: ChargersDataProps, i) => (
            <List
              key={i}
              chargerName={charger.name}
              serialNumber={charger.serialNumber}
              chargerType={charger.chargerType}
              isActive={charger.isActive}
              image={
                charger.chargerType === "go-e Charger Gemini" ||
                charger.chargerType === "go-e Charger Gemini Flex"
                  ? chargerGemini
                  : chargerHomePlus
              }
            />
          ))}
        </GridContainer>
      ) : (
        <ShowMessage> Nothing to show!</ShowMessage>
      )}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  ${({ theme }) => theme.content}
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 1rem;
  min-height: 40rem;

  @media ${({ theme }) => theme.viewport.m} {
    padding: 1rem 5rem;
  }
`;

const LabelWrapper = styled.div`
  display: inline;
  padding: 1rem 1rem;
`;

const Label = styled.label`
  margin-left: 0.3rem;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

const P = styled.p`
  font-size: 12px;
  color: #666;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem 1rem;
  padding: 1rem;

  @media ${({ theme }) => theme.viewport.m} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }
  @media ${({ theme }) => theme.viewport.l} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ShowMessage = styled.h4`
  color: ${({ theme }) => theme.colors.alert};
  text-align: center;
  font-weight: 500;
  margin-top: 5rem;
`;

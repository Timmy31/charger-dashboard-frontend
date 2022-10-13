import styled from "styled-components";

export interface BoxProps {
  children: React.ReactNode;
}

/**
 * Box with shadow styles
 */

export const Box = (props: BoxProps) => {
  const { children } = props;

  return <ContentWrapper>{children}</ContentWrapper>;
};

const ContentWrapper = styled.div`
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 2rem;
`;

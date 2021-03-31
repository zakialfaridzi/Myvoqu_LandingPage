import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import CountdownTimer from "./CountdownTimer";

const PrimaryBackgroundContainer = tw.div`py-16 lg:py-20 rounded-lg relative`;
const Row = tw.div`px-4 sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`w-full lg:w-full max-w-full flex justify-center items-center`;
const TextContainer = tw(ColumnContainer)`text-6xl sm:text-4xl font-bold`;

export default ({ pushDownFooter = true }) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 -mt-48 lg:mb-24`}>
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer style={{ backgroundColor: "#243E63" }}>
          <Row>
            <TextContainer>
              <CountdownTimer date="04/12/2021" />
            </TextContainer>
          </Row>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

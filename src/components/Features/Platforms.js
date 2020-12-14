import React from "react";
import tw from "twin.macro";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";

const Container = tw(ContainerBase)`bg-purple-200 -mx-8 my-8 -mt-12`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`;
const TextColumn = tw.div`flex items-center flex-col sm:flex-row mx-20`;

const HeadingPlat = tw(
  SectionHeading
)`text-gray-700 sm:text-center leading-none pt-8`;

export default () => {
  const platforms = [
    {
      name: "Android",
      icon: "https://cdn.svgporn.com/logos/android-icon.svg",
    },
    {
      name: "iOS",
      icon: "https://cdn.svgporn.com/logos/apple.svg",
    },
    {
      name: "Web",
      icon: "https://www.flaticon.com/svg/static/icons/svg/558/558593.svg",
    },
  ];

  return (
    <Container>
      <HeadingPlat>Platform</HeadingPlat>
      <Content>
        <Row>
          {platforms.map((platform, index) => (
            <TextColumn key={index}>
              <img
                src={platform.icon}
                alt="icons"
                style={{ width: "150px", height: "150px" }}
              />
            </TextColumn>
          ))}
        </Row>
      </Content>
    </Container>
  );
};

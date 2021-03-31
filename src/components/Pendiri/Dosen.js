import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Otak Brilian Di Belakang MyVoQu",
  tabs = {
    1: [
      {
        imageSrc:
          "https://i.ibb.co/4ZhMV95/IMG-20200822-132937-removebg-preview.png",
        title: "Suryatiningsih, OCA",
        content: "Founder, Dosen Pembimbing",
      },
      {
        imageSrc:
          "https://dim.telkomuniversity.ac.id/wp-content/uploads/2019/05/16831875_1436868572992771_1368292405152634905_n.jpg",
        title: "Pramuko Aji",
        content: "Co-Founder, Dosen Pembimbing",
      },
      {
        imageSrc:
          "https://i.ibb.co/TWH444g/Whats-App-Image-2021-03-31-at-17-23-04.jpg",
        title: "Siska Komala Sari",
        content: "CQA, Dosen Pembimbing",
      },
      {
        imageSrc:
          "https://i.ibb.co/JdbYN9K/Whats-App-Image-2021-01-18-at-15-14-36.jpg",
        title: "Fydhia Helmi Ramadhan",
        content: "CEO (Chief Executive Officer)",
      },
      {
        imageSrc:
          "https://i.ibb.co/kxz1CFF/Whats-App-Image-2021-01-13-at-15-05-17.jpg",
        title: "M. Abizard Al Thareq",
        content: "CTO (Chief Technology Officer)",
      },
      {
        imageSrc: "https://i.ibb.co/WfjjgpH/Kawaguchiko-190708-0025.jpg",
        title: "Zaki Al Faridzi",
        content: "CMO (Chief Marketing Officer)",
      },
      {
        imageSrc:
          "https://i.ibb.co/58bCRhm/Whats-App-Image-2021-01-13-at-15-31-02.jpg",
        title: "Rahmat Ibrahim",
        content: "CSO (Chief Security Officer)",
      },
      {
        imageSrc:
          "https://i.ibb.co/W2LxGWh/Whats-App-Image-2021-03-31-at-19-36-35.jpg",
        title: "Bill Qisty A Lesmana",
        content: "CFO (Chief Financial Officer)",
      },
    ],
    2: [
      {
        imageSrc:
          "https://i.ibb.co/WGhRTJc/Whats-App-Image-2021-01-18-at-16-28-57.jpg",
        title: "Diva Rizki Megania",
        content: "COO (Chief Operating Officer)",
      },
      {
        imageSrc:
          "https://i.ibb.co/HD2cQxr/Whats-App-Image-2021-01-20-at-13-48-38.jpg",
        title: "Muhammad Haitsam",
        content: "CIO (Chief Information Officer)",
      },
      {
        imageSrc:
          "https://i.ibb.co/0mbS9mr/Whats-App-Image-2021-01-18-at-22-50-31.jpg",
        title: "Melia Antika",
        content: "Graphic Designer, Marketing",
      },
      {
        imageSrc:
          "https://i.ibb.co/swGTSKz/Whats-App-Image-2021-01-18-at-21-15-04.jpg",
        title: "Siti Nuraida Az Zahra",
        content: "Graphic Designer, Marketing",
      },
    ],
  },
}) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow styled={{}}>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer
                    imageSrc={card.imageSrc}
                  ></CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

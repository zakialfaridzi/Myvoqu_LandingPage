import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import AnimationRevealPage from "ExternalLibs/AnimationRevealPage.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-full md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
// const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: "https://i.ibb.co/k2vq4fW/home.png",
      title: "Konsep Sosial Media",
      description:
        "Dengan konsep sosial media, anda tidak akan bosan saat menghafal Alquran karena ada teman untuk berinteraksi.",
      url: "#",
    },

    {
      imageSrc: "https://i.ibb.co/RjLtg00/Inside-Group.png",
      title: "Group Yang Interaktif",
      description:
        "Kita semua tidak suka jika berada di sebuah grup hafalan namun tidak dibimbing kan? Tenang saja, di dalam grup hafalan MyVoQu anda akan dibimbing oleh mentor yang berkualitas.",
      url: "#",
    },

    {
      imageSrc: "https://i.ibb.co/BrDrDKM/ngaji.jpg",
      title: "Menghafal Alquran Live Bersama Tokoh Islami",
      description:
        "Kamu yakin tidak mau menghafal Alquran live bersama tokoh islami terkenal dari Indonesia?",
      url: "#",
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Apa itu MyVoQu?</HeadingTitle>
          <HeadingDescription>
            Enjoy your journey in Alquran learning with us.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <AnimationRevealPage>
              <Card key={i} reversed={i % 2 === 1}>
                <Image imageSrc={card.imageSrc} />
                <Details>
                  <Title>{card.title}</Title>
                  <Description>{card.description}</Description>
                  <Link href={card.url}>Lihat Lebih</Link>
                </Details>
              </Card>
            </AnimationRevealPage>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};

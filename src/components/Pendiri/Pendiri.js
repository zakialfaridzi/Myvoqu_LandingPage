import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center text-gray-700`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-md`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-base`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default () => {
  const testimonials = [
    {
      imageSrc:
        "https://yt3.ggpht.com/ytc/AAUvwnjBZuSn4SWC3hz9NBNgTMy1F6XsJHb65M7aTGxOLQ=s900-c-k-c0x00ffffff-no-rj",
      quote: "MyVoQu membuat anda menjadi penghafal Alquran yang lancar!",
      customerName: "Fydhia Helmi",
      customerTitle: "CEO",
      company: "MyVoQu",
    },
    {
      imageSrc:
        "https://i.ibb.co/kxz1CFF/Whats-App-Image-2021-01-13-at-15-05-17.jpg",
      quote: "MyVoQu terlalu keren untuk dilewatkan!",
      customerName: "Abizard Al Thareq",
      customerTitle: "CTO",
      company: "MyVoQu",
    },
    {
      imageSrc: "https://i.ibb.co/WfjjgpH/Kawaguchiko-190708-0025.jpg",
      quote: "MyVoQu membantu sekali saat saya buntu dalam menghafal Alquran!",
      customerName: "Zaki Al Faridzi",
      customerTitle: "CMO",
      company: "MyVoQu",
    },
    {
      imageSrc:
        "https://i.ibb.co/58bCRhm/Whats-App-Image-2021-01-13-at-15-31-02.jpg",
      quote:
        "MyVoQu membuat kita aman selama pandemi karena kita ga perlu bertemu langsung pun optimal!",
      customerName: "Rahmat Ibrahim",
      customerTitle: "CSO",
      company: "MyVoQu",
    },
  ];

  const backPos = {
    backgroundPos: "center top",
    backgroundRep: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Pendiri</HeadingTitle>
          <HeadingDescription>
            Tujuan kami adalah membangun dunia pembelajaran islami menjadi lebih
            baik dengan MyVoQu.
          </HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider
            nextArrow={<NextArrow />}
            prevArrow={<PreviousArrow />}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.customerName}
                    style={{
                      height: "auto",
                      width: "auto",
                      backgroundRepeat: backPos.backgroundRep,
                      backgroundPosition: backPos.backgroundPos,
                      backgroundSize: backPos.backgroundSize,
                    }}
                  />
                </ImageContainer>
                <TextContainer>
                  <QuoteContainer>
                    <QuotesLeft />
                    <Quote>{testimonial.quote}</Quote>
                    <QuotesRight />
                  </QuoteContainer>
                  <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>
                      <b>{testimonial.customerTitle}</b> &nbsp;
                      {testimonial.company}
                    </CustomerTitle>
                  </CustomerInfo>
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

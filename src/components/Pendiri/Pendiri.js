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
        "data:image/jpeg;base64,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",
      quote: "MyVoQu terlalu keren untuk dilewatkan!",
      customerName: "Abizard Al Thareq",
      customerTitle: "CTO",
      company: "MyVoQu",
    },
    {
      imageSrc: "https://zakialfaridzi.github.io/WebPortofolio/images/hj.jpg",
      quote: "MyVoQu membantu sekali saat saya buntu dalam menghafal Alquran!",
      customerName: "Zaki Al Faridzi",
      customerTitle: "CMO",
      company: "MyVoQu",
    },
    {
      imageSrc: "https://i.ibb.co/xGy8ywk/KTM2.jpg",
      quote:
        "MyVoQu membuat kita aman selama pandemi karena kita ga perlu bertemu langsung pun optimal!",
      customerName: "Rahmat Ibrahim",
      customerTitle: "CSO",
      company: "MyVoQu",
    },
  ];
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
                    style={{ height: "400px", width: "400px" }}
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

import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import EmailIllustrationSrc from "images/sent_messages_.svg";
import SubscribeCard from "react-subscribe-card";

const mailchimpURL = `https://gmail.us7.list-manage.com/subscribe/post?u=b58f11e5ff79d63d4e7d50002&amp;id=66e33a68aa`;

const outerCardStyle = tw.div`relative -mt-48`;
const subContainerStyle = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;

const subButtonStyle = `
      border-radius: 5px;
      flex-grow: 1;
      background-color: #fdfdfd;
      color: #333;

      &:hover{
        background-color:#5011CC;
        color:#FDFDFD;
	      transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s, color 0.3s ease 0s, fill 0.3s ease 0s, stroke 0.3s ease 0s, opacity 0.3s ease 0s, box-shadow 0.3s ease 0s, transform 0.3s ease 0s;
      }
    `;

const Container = tw.div`relative -mt-48`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;

const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;

const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;

export default ({
  heading = (
    <>
      <span style={{ color: "#333" }}>
        Yuk Subscribe{" "}
        <span tw="text-primary-500" id="closedbeta">
          Newsletter
        </span>
        <wbr /> Kami.
      </span>
    </>
  ),
  textOnLeft = true,
}) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <SubscribeCard
            mailchimpURL={mailchimpURL}
            outerCardStyle={outerCardStyle}
            subContainerStyle={subContainerStyle}
            subInputStyle={Form}
            subButtonStyle={subButtonStyle}
            title={heading}
            description="Jangan sampai ketinggalan informasi terbaru dari MyVoQu."
            emailPlaceholder="Email Anda"
            buttonText="Daftar"
          />
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

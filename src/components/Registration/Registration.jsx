import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative -my-20 -mt-48`;
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
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Daftar lebih awal",
  heading = (
    <>
      Pendaftar Awal Dapat <span tw="text-primary-500">Rewards</span> Yang
      Menarik
    </>
  ),
  description = "Daftarkan dirimu lebih cepat untuk mendapatkan akun MyVoQu Pro selama 3 BULAN secara GRATIS.",
  submitButtonText = "Daftar",
  textOnLeft = true,
}) => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  const sendData = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch(
        "https://v1.nocodeapi.com/zalfaridzi/google_sheets/tzzndNycWODcGgmO?tabId=earlymyvoqu",
        {
          method: "post",
          body: JSON.stringify([
            [formData.nama, formData.email, formData.nohp, formData.message],
          ]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(true);
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      setMessage("Success");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error");
    }
    setIsSubmitted(true);
    toast("Pendaftaran anda sukses!", {
      icon: "🎉",
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };

  return (
    <Container id="regist">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={sendData}>
              <Input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                onChange={handleInput}
              />
              <Input
                type="email"
                name="email"
                placeholder="Alamat Email"
                onChange={handleInput}
              />
              <Input
                type="text"
                name="nohp"
                placeholder="Nomor HP"
                onChange={handleInput}
              />
              <Textarea
                name="message"
                placeholder="Feedback Mengenai Website"
                onChange={handleInput}
              />
              {isLoading ? (
                <SubmitButton
                  type="submit"
                  disabled
                  style={{ backgroundColor: "red" }}
                >
                  Loading
                </SubmitButton>
              ) : isSubmitted ? (
                <>
                  <Toaster position="bottom-left" reverseOrder={false} />
                  <SubmitButton type="submit">{submitButtonText}</SubmitButton>
                </>
              ) : !isSubmitted ? (
                <SubmitButton type="submit">{submitButtonText}</SubmitButton>
              ) : (
                <SubmitButton type="submit">{submitButtonText}</SubmitButton>
              )}
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

import React from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "ExternalLibs/AnimationRevealPage.js";
import LandingPage from "pages/LandingPage.js";
import EventLandingPageImageSrc from "images/demo/EventLandingPage.jpeg";
import ThreePlansWithHalfPrimaryBackgroundPricing from "components/Harga/Harga.js";
import VerticalWithAlternateImageAndTextFeatures from "components/Features/Features.js";
import TwoColumnWithImageTestimonial from "components/Pendiri/Pendiri.js";
import TwoColContactUsFullForm from "components/ContactUs/ContactUs.js";
import GetStarted from "components/GetStarted/GetStarted.js";
import SimpleFiveColumnFooter from "components/Footer/Footer.js";

export const components = {
  landingPages: {
    LandingPage: {
      component: LandingPage,
      imageSrc: EventLandingPageImageSrc,
      url: "/pages/LandingPage",
    },
  },

  blocks: {
    Pricing: {
      type: "Pricing Section",
      elements: {
        ThreePlansWithHalfPrimaryBackground: {
          name: "Three Plans With Primary Background at Top",
          component: ThreePlansWithHalfPrimaryBackgroundPricing,
          url: "/components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground",
        },
      },
    },
    Features: {
      type: "Features Section",
      elements: {
        VerticalWithAlternateImageAndText: {
          name: "Vertical Feature Cards With Alternate Image and Text",
          component: VerticalWithAlternateImageAndTextFeatures,
          url: "/components/blocks/Features/VerticalWithAlternateImageAndText",
        },
      },
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        TwoColumnWithImage: {
          name: "Two Column With Image",
          component: TwoColumnWithImageTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImage",
        },
      },
    },

    Form: {
      type: "Forms Section",
      elements: {
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      },
    },

    CTA: {
      type: "CTA Section",
      elements: {
        GetStarted: {
          name: "Get Started Light",
          component: GetStarted,
          url: "/components/blocks/GetStarted/GetStarted",
        },
      },
    },

    Footer: {
      type: "Footers Section",
      elements: {
        SimpleFiveColumn: {
          name: "Simple Five Column",
          component: SimpleFiveColumnFooter,
          url: "/components/blocks/Footer/SimpleFiveColumn",
        },
      },
    },
  },
};

export default () => {
  const { type, subtype, name } = useParams();

  try {
    let Component = null;
    if (type === "blocks" && subtype) {
      Component = components[type][subtype]["elements"][name].component;
      return (
        <AnimationRevealPage disabled>
          <Component />
        </AnimationRevealPage>
      );
    } else Component = components[type][name].component;

    if (Component) return <Component />;

    throw new Error("Component Not Found");
  } catch (e) {
    console.log(e);
    return <div>Error: Component Not Found</div>;
  }
};

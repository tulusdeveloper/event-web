import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bliss & Blooms| Bliss & Blooms",
  description: "This is About Page Bliss and Blooms",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a premier event planning and design company based in Eldoret, Kenya. We specialize in weddings, corporate events, private parties, and more. Our team of experienced event planners and designers will work with you to create a truly unforgettable event that reflects your unique style and vision.."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import GoogleMapIframe from "@/components/GoogleMapFrane";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Bliss & Blooms Contact Page",
  description: "This is Contact Page for Bliss and Blooms",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
      <GoogleMapIframe/>
    </>
  );
};

export default ContactPage;

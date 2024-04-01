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
        pageName="Contact Us"
        description="Get in touch with Bliss and Blooms for all your wedding and event planning needs. Our experienced team is here to help you create unforgettable moments that exceed your expectations."
      />

      <Contact />
      <GoogleMapIframe/>
    </>
  );
};

export default ContactPage;

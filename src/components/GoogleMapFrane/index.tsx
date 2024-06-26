import React from 'react';

const GoogleMapIframe = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d510652.5184836081!2d35.1412771!3d0.7540508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa92e1bc6e1b0483b%3A0x25f9b88948538cfe!2sBliss%20%26%20Blooms%20Events!5e0!3m2!1sen!2ske!4v1710146489436!5m2!1sen!2ske`;

  return (
    <div className="w-full h-96">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapIframe;
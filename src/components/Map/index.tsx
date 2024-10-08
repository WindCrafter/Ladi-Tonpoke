import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://embedmaps.com/google-maps-authorization/script.js?id=6c39d786a40d98c3e2d5b557e713a251439ede5a";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        title="Google Map"
        width="520"
        height="250"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&height=400&hl=en&q=1%20Wallich%20Singapore+(Guoco%20Tower)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
        style={{ border: 0 }}
      ></iframe>
      <a href="https://doktorarbeitschreiben.com/">
        Doktorarbeit schreiben lassen
      </a>
    </div>
  );
};

export default MapComponent;

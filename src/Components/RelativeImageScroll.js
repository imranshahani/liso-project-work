import React, { useState } from "react";

function ReadMoreLess() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="card">
      <h3>Read More Read Less</h3>

      <p>
      The VLX-TW2 Series provides one of the most advanced IP Streaming
            solutions on the market utilizing Aurora’s IPBaseTTM technology,
            which synergizes various IP/AV standards to work together as one. It
            is the industry’s first 4K UHD transceiver with only 1.5 Frame
            (25ms) latency and visually losses compression. Using a transmitter
            (encoder) and receiver (decoder), respectively, used to be the
            standard – until now. The VLX-TCW2 Series can be set up as either
            one to make installation, inventory, and troubleshooting easier.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
      </p>
      {isShowMore && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                hendrerit leo nec purus iaculis, vel pellentesque augue
                venenatis. Ut lacinia egestas tellus et porttitor. Aenean
                lobortis enim massa, quis lacinia enim tempor et. Curabitur
                luctus id dolor vel rhoncus. Nulla auctor at tellus non blandit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse non vestibulum est, ac dignissim elit. Cras
                convallis tortor nibh, vel scelerisque odio euismod rutrum.
                Maecenas sit amet mi eu neque ullamcorper viverra. Nam et nisi
                ac lacus egestas vulputate venenatis eu urna. Praesent venenatis
                lectus vestibulum sapien iaculis, a pellentesque dui venenatis.
                Nunc vitae nisl nisi. Phasellus ligula nibh, rhoncus in suscipit
                quis, pretium lobortis augue. Maecenas tristique quam ultrices,
                scelerisque dolor vitae, tristique ligula. Nam ultrices est nec
                laoreet cursus. Praesent arcu leo, faucibus nec lorem ut,
                finibus posuere mauris. Aliquam erat volutpat. In vel finibus
                nunc. Aliquam non nisi.
               
        </p>
      )}

      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMoreLess;
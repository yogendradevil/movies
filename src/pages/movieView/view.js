import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./view.css";

const MovieView = () => {
  const { id } = useParams();
  const iframeRef = useRef(null);
  const [fullscreenEnabled, setFullscreenEnabled] = useState(false);

  useEffect(() => {
    checkFullscreenSupport();
  }, []);

  const checkFullscreenSupport = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      setFullscreenEnabled(!!doc.fullscreenEnabled);
    }
  };

  return (
    <div className="frame">
      <iframe
        ref={iframeRef}
        src={`https://www.2embed.to/embed/imdb/movie?id=${id}`}
        allowFullScreen
      ></iframe>
      {!fullscreenEnabled && (
        <p>Fullscreen mode is not supported in this browser.</p>
      )}
    </div>
  );
};

export default MovieView;


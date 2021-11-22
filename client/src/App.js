import React from "react";
import ReactHlsPlayer from "react-hls-player";
import Header from "./layout";
export default function App() {
  // const vdoUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
  const vdoUrl = "https://4f55-184-22-91-218.ngrok.io/vdo/index.m3u8";

  return (
    <>
      <Header>
        <ReactHlsPlayer
          src={vdoUrl}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
          hlsConfig={{
            autoStartLoad: true,
            startPosition: -1,
            debug: false,
            VideoPlaybackQuality: true,
          }}
        />
      </Header>
    </>
  );
}

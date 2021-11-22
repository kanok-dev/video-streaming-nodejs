import React from "react";
import ReactHlsPlayer from "react-hls-player";
import Header from "./layout";
export default function App() {
  // const vdoUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
  const vdoUrl = "http://localhost:8080/vdo/index.m3u8";
  return (
    <>
      <Header>
        <ReactHlsPlayer
          src={vdoUrl}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </Header>
    </>
  );
}

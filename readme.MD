https://qvault.io/javascript/hls-video-streaming-node/

React Native: Expo video HLS streaming sample
https://gist.github.com/lucky-c/91d96977f913d54f723b64c34ce03fac

HLS Command:
ffmpeg -i sample-mp4-file.mp4 -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls index.m3u8

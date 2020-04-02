import React from 'react';

import Markdown from '#components/Markdown';
// import RelatedPosts from '#components/RelatedPosts';

export default () => {
  return (
    <>
      <Markdown
        content={`
          ## Convert a video to gif right from your terminal in mac using bash for free!

          ### OBJECTIVE - We want to convert a video to gif using ffmpeg & gifsicle on a macbook

          - Install *ffmpeg* & *gifsicle* by running 
          ~~~ bash
          brew install ffmpeg
          brew install gifsicle
          ~~~ bash
          
          - To convert a file you would need to run the following command from the terminal 
          ~~~ bash
          ffmpeg -i path_to_your_video_file -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > ~/Downloads/name_of_your_gif.gif
          ~~~ bash

          - -r 10 tells *ffmpeg* to reduce the frame rate from __25 fps to 10__
          - --delay=3 tells gifsicle to delay 30ms between each gif
          - --optimize=3 requests that gifsicle use the slowest/most file-size optimization

          I have created a simple bash script to do the above 
          ~~~ bash
            #!/usr/bin/env bash

            if ! [ -x "$(command -v ffmpeg)" ]; then
              echo 'Error: ffmpeg is not installed. please install with (brew install ffmpeg)' >&2
              exit 1
            fi
            
            if ! [ -x "$(command -v gifsicle)" ]; then
              echo 'Error: gifsicle is not installed. please install with (brew install gifsicle)' >&2
              exit 1
            fi
            
            
            echo -n "enter absolute path to video: "
            read -r MOVNAME
            
            echo -n "enter name for your gif (the script will add the extension for you): "
            read -r GIFNAME
            
            ffmpeg -i "$MOVNAME" -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > ~/Downloads/"$GIFNAME".gif
            
            echo -e "\nSaved $GIFNAME to downloads"
          ~~~

          save the above bash script as convertToGif.sh and run it using ./convertToGif.sh path_to_your_video_file
        `}
      />
      {/* <RelatedPosts
        slugs={[
          'check-if-an-element-has-given-class',
          'highlight-an-element-when-dragging-a-file-over-it',
          'resize-columns-of-a-table',
        ]}
      /> */}
    </>
  );
};

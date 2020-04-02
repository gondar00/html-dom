import React from 'react';

import Markdown from '#components/Markdown';
// import RelatedPosts from '#components/RelatedPosts';

export default () => {
  return (
    <>
      <Markdown
        content={`
          ## Preserve cursor position in input when modifying the input through regex in react hooks

          ### OBJECTIVE - We want to save the cursor position while we are trying to strip out any characters other than alphabets

          Now I'm in paragraph 2.
          I'm still in paragraph 2 too!


          I'm in paragraph three!

          ~~~ javascript
          ele.classList.add('class-name');
          ~~~

          ## Remove a class from an element

          ~~~ javascript
          ele.classList.remove('class-name');
          ~~~

          ## Toggle a class

          ~~~ javascript
          ele.classList.toggle('class-name');
          ~~~
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

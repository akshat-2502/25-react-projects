import { useRef, useState } from "react";
import useOutsideClick from ".";

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is some random content</h1>
          <p>Click anywhere outside this content to close the box</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};
export default UseOnClickOutsideTest;

import { useRef } from "react";

function Scrolldown() {
  const boxRef = useRef(null);

  const handleScrollDown = () => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  };

  return (
    <>
      <div
        ref={boxRef}
        style={{ height: "200px", overflowY: "auto", border: "1px solid gray" }}
      >
        {[...Array(30).keys()].map(i => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
      <button onClick={handleScrollDown}>Scroll to Bottom</button>
    </>
  );
}

export default Scrolldown;

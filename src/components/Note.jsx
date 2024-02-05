import React, { useState, useEffect } from "react";

function Note() {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNote(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    showNote && (
      <div className="fixed top-2/4 animate-[note_2s_ease-in-out_1] flex items-center justify-center z-20 text-center font-bold w-full border rounded-lg p-4 bg-orange-300">
        High server usage detected. Please wait momentarily as we prioritize
        processing current requests to optimize API traffic.
        <div
          className="border bg-white rounded-md aspect-square p-2 ml-2 cursor-pointer"
          onClick={() => {
            setShowNote(false);
          }}
        >
          Ok
        </div>
      </div>
    )
  );
}

export default Note;

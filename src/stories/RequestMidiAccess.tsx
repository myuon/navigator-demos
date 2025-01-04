import { useEffect, useState } from "react";

export const RequestMidiAccess = () => {
  const [midiAccess, setMidiAccess] = useState<MIDIAccess>();
  useEffect(() => {
    navigator.requestMIDIAccess().then((midiAccess) => {
      console.log(midiAccess);
      setMidiAccess(midiAccess);
    });
  }, []);

  return (
    <div>
      <p>
        MIDI Access: {midiAccess?.inputs.size} inputs,{" "}
        {midiAccess?.outputs.size} outputs
      </p>
    </div>
  );
};

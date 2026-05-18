import { useRef } from "react";
import { useClinicRevealScrollTrigger } from "../../hooks/useClinicRevealScrollTrigger";
import { ClinicSuite } from "./ClinicSuite";

export function ClinicRevealStack() {
  const stackRef = useRef(null);
  const pinRef = useRef(null);

  useClinicRevealScrollTrigger(stackRef, pinRef);

  return (
    <div ref={stackRef} className="clinic-reveal-stack">
      <div ref={pinRef} className="clinic-reveal-stack__pin">
        <ClinicSuite />
      </div>
    </div>
  );
}

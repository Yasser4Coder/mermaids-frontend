import { useRef } from "react";
import { useSpaRevealScrollTrigger } from "../../hooks/useSpaRevealScrollTrigger";
import { SpaRevealBridge } from "./SpaRevealBridge";
import { SpaWellness } from "./SpaWellness";

export function SpaRevealStack() {
  const stackRef = useRef(null);
  const pinRef = useRef(null);

  useSpaRevealScrollTrigger(stackRef, pinRef);

  return (
    <div ref={stackRef} className="spa-reveal-stack">
      <div ref={pinRef} className="spa-reveal-stack__pin">
        <SpaRevealBridge />
        <SpaWellness />
      </div>
    </div>
  );
}

import { useRef } from "react";
import { useSalonServicesScrollTrigger } from "../../hooks/useSalonServicesScrollTrigger";
import { MermaidCollection } from "./MermaidCollection";

export function ServicesRevealStack() {
  const stackRef = useRef(null);
  const pinRef = useRef(null);

  useSalonServicesScrollTrigger(stackRef, pinRef);

  return (
    <div ref={stackRef} className="services-reveal-stack">
      <div ref={pinRef} className="services-reveal-stack__pin">
        <MermaidCollection />
      </div>
    </div>
  );
}

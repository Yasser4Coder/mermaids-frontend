import { BookingSteps } from "../components/home/BookingSteps";
import { ClinicRevealStack } from "../components/home/ClinicRevealStack";
import { CtaAppointments } from "../components/home/CtaAppointments";
import { ProductsRevealStack } from "../components/home/ProductsRevealStack";
import { HeroRevealStack } from "../components/home/HeroRevealStack";
import { ServicesRevealStack } from "../components/home/ServicesRevealStack";
import { SpaRevealStack } from "../components/home/SpaRevealStack";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function HomePage() {
  useDocumentTitle(null);

  return (
    <>
      <HeroRevealStack />
      <ServicesRevealStack />
      <SpaRevealStack />
      <ClinicRevealStack />
      <ProductsRevealStack />
      <BookingSteps />
      <CtaAppointments />
    </>
  );
}

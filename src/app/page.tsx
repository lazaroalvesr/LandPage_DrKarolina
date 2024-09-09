import { ContactPage } from "@/_components/contact";
import { HeroPage } from "@/_components/hero";
import { MainPage } from "@/_components/main";
import { ServicePaege } from "@/_components/services";

export default function Home() {
  return (
    <>
      <HeroPage />
      <MainPage />
      <ServicePaege/>
      <ContactPage/>
    </>
  );
}

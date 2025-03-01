import { Footer } from "@/components/footer";
import { SectionAreas } from "@/components/section-areas";
import ContactSection from "@/components/section-contact";
import { SectionPhotos } from "@/components/section-hero";

export default function Home() {
  return (
    <>
      <SectionPhotos/>
      <SectionAreas/>
      <ContactSection/>
    </>
  );
}

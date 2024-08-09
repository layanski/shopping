import EventsDeals from "@/components/EventsDeals";
import Hero from "@/components/Hero";
import NearYou from "@/components/NearYou";
import PopularDeals from "@/components/PopularDeals";
import ServicesForStudents from "@/components/ServicesForStudents";
import ServicesNearYou from "@/components/ServicesNearYou";
import StudentsDeals from "@/components/StudentsDeals";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularDeals />
      <EventsDeals />
      <NearYou />
      <ServicesNearYou />
      <StudentsDeals />
      <ServicesForStudents />
    </main>
  );
}

import { SERVICES } from "../constants";
import Heading from "../ui/Heading";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="mt-[120px] h-screen">
      <div>
        <Heading>My Services</Heading>
        <div className="flex gap-10 p-10 justify-center">
          <ServiceCard
            delay={SERVICES[0].delay}
            title={SERVICES[0].title}
            image={SERVICES[0].image}
          />
          <ServiceCard
            delay={SERVICES[1].delay}
            title={SERVICES[1].title}
            image={SERVICES[1].image}
          />
          <ServiceCard
            delay={SERVICES[2].delay}
            title={SERVICES[2].title}
            image={SERVICES[2].image}
          />
          <ServiceCard
            delay={SERVICES[3].delay}
            title={SERVICES[3].title}
            image={SERVICES[3].image}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import Programs from '../components/home/Programs';
import Roadmap from '../components/home/Roadmap';
import IdeaLabFeature from '../components/home/IdeaLabFeature';
import Projects from '../components/home/Projects';
import WhyChooseUs from '../components/home/WhyChooseUs';
import SchoolPartnership from '../components/home/SchoolPartnership';
import Associations from '../components/home/Associations';
import useSEO from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'Welcome to RAGECAPZ. We build the next generation of electronics innovators through hands-on robotics, IoT, and embedded systems education.',
    path: '/',
  });

  return (
    <div className="flex flex-col">
      <Hero />
      <Introduction />
      <Programs />
      <Roadmap />
      <IdeaLabFeature />
      <Projects />
      <WhyChooseUs />
      <Associations />
      <SchoolPartnership />
    </div>
  );
}

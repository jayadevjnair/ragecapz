import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import Programs from '../components/home/Programs';
import Roadmap from '../components/home/Roadmap';
import IdeaLabFeature from '../components/home/IdeaLabFeature';
import Projects from '../components/home/Projects';
import WhyChooseUs from '../components/home/WhyChooseUs';
import SchoolPartnership from '../components/home/SchoolPartnership';
import Associations from '../components/home/Associations';

export default function Home() {
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

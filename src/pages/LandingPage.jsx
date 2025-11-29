
import Hero from '../components/Hero';
import Features from './Features';
import WhyWorkspace from './WhyWorkspace';
import Container from '../components/Container';
import CustormerStoryCard from '../components/cards/CustormerStoryCard';
import FaqCard from '../components/cards/FaqCard';

const LandingPage = () => {

    return (
        <div className=" relative h-fit font-outfit  overflow-x-clip ">
            <Hero ></Hero>
            <Features></Features>
            <WhyWorkspace></WhyWorkspace>
            <Container text="Customer Stories">
                <CustormerStoryCard></CustormerStoryCard>
            </Container>
            <Container text="FAQ (Frequently Asked Questions)">
                <FaqCard></FaqCard>
            </Container>
        </div>
    )
}

export default LandingPage
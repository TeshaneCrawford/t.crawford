import type { NextPage } from 'next'
import { GetStaticProps } from "next";
import router, { useRouter } from "next/router";
import { Spacer } from "@nextui-org/react";

import { Hero } from '../components/index'

import Layout from '../Layout';
import SkillSection from '../components/skills-section/index';

import constantsContent from '../content/constants/index';

interface Props {
  // routes: Route[];
  // currentRoute: Route;
}

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <Hero />
      {/* <Spacer y={2} /> */}
      <SkillSection skills={constantsContent.techSkills} />
      <Spacer y={2} />
      {/* Main features */}
      {/* <Section>
        <FeaturesGrid features={landingContent.topFeatures} />
      </Section>
      <CustomThemesSection />
      <ComparationSection /> */}
      {/* <DarkModeSection /> */}
      {/* <CustomizationSection />
      <BuiltInStitchesSection />
      <LastButNotLeastSection /> */}
      {/* Installation banner */}
      {/* <Section css={{ zIndex: "$10" }}>
        <Spacer css={{ "@xsMax": { mt: "$16" } }} y={6} />
        <InstallBanner />
      </Section>
      <Spacer y={6} />
      <Section>
        <Community />
      </Section>
      <Spacer y={4} /> */}

    </Layout>
  )
}

export default Home

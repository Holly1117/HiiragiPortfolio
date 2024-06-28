import React from "react";
import { Container } from "@chakra-ui/react";
import About from "../components/About";
import Experience from "../components/Experience";
import Certification from "../components/Certification";
import TechStack from "../components/TechStack";
import Work from "../components/Work";
import Art from "../components/Art";

const Home: React.FC = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <About />
      <Experience />
      <TechStack />
      <Certification />
      <Work />
      <Art />
    </Container>
  );
};

export default Home;

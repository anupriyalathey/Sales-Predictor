import React, {useRef} from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { useDisclosure, Box } from '@chakra-ui/react';
import AboutUs from "./Home/AboutUs";
import ContactUs from "./Home/ContactUs";
import DrawerComponent from "./Home/DrawerComponent";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Nav from "./Home/Nav";
import Services from "./Home/Services";
import Testimonials from "./Home/Testimonials";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef()
  return (
  //  <Flex>
  //    <Link to="/signin">Sign In</Link>
  //  </Flex>
  <Box>
      <Nav ref={btnRef} onOpen={onOpen} />
      <Hero />
      {/* <AboutUs /> */}
      <Services />
      {/* <Testimonials /> */}
      <ContactUs />
      <Footer />

      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>


    )
  }
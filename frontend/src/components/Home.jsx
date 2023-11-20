import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Text, Flex} from "@chakra-ui/react";

export default function Home() {
  return (
   <Flex>
     <Link to="/signin">Sign In</Link>
   </Flex>

    )
  }
"use client";

import { useInView, motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

interface AnimatedInViewProps {
  children: ReactNode;
  duration?: number;
}

const AnimatedInview: React.FC<AnimatedInViewProps> = ({
  children,
  duration = 0.7,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedInview;
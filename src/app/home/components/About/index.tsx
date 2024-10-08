import AnimatedInview from "@/components/AnimatedInview.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--black-bg);
  padding: 4rem 0;
  min-height: 100vh;
`;

const AboutPage = () => {
  return (
    <Wrapper>
      <div className="container">
        AboutPage
        <AnimatedInview duration={1}>
          <div
            style={{
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            <h2>This content will animate into view</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
        </AnimatedInview>
      </div>
    </Wrapper>
  );
};

export default AboutPage;

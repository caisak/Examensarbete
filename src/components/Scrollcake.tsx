import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const ScrollSectionComponent = () => {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Define the y-transformations and opacity for each piece based on scroll progress
  const translateYPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 390]);
  const opacityPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  const translateYPiece2 = useTransform(
    scrollYProgress,
    [0.08, 0.16],
    [0, 260],
  );
  const opacityPiece2 = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);

  const translateYPiece3 = useTransform(
    scrollYProgress,
    [0.16, 0.24],
    [0, 120],
  );
  const opacityPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);

  const translateYDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 130],
  );
  const OpacityDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );

  const translateTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 57]);
  const OpacityTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 1]);


  const translateYText1 = useTransform(scrollYProgress, [0, 0.32], [0, 100]);
  const translateOpacityText1 = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, 1],
  );

  const translateYText2 = useTransform(scrollYProgress, [0.35, 0.64], [100, 200]);
  const translateOpacityText2 = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );
  const translateYText3 = useTransform(scrollYProgress, [0.69, 0.84], [200, 300]);
  const translateOpacityText3 = useTransform(
    scrollYProgress,
    [0.69, 0.84],

    [0, 1],
  );

  return (
    <ScrollSection ref={targetRef}>
      <MyBox>
        <FlexBox>
          <Title>
            <h2>Create your dream cake</h2>
            <p>
              <p>
                In our specialiced customized cake you can build your dream cake
                and see a 3d vizualisation of your cake in real time!
              </p>
            </p>
          </Title>
          <Box>
            <Piece
              src="/base1-pink.png"
              style={{ y: translateYPiece1, opacity: opacityPiece1 }}
            ></Piece>
            <Middle
              src="/base2-pink.png"
              style={{ y: translateYPiece2, opacity: opacityPiece2 }}
            ></Middle>
            <Top
              src="/base3-pink.png"
              style={{ y: translateYPiece3, opacity: opacityPiece3 }}
            ></Top>
            <Decorations
              src="/decorations.png"
              style={{ y: translateYDecorations, opacity: OpacityDecorations }}
            ></Decorations>
            <Topper
              src="/topper.png"
              style={{ y: translateTopper, opacity: OpacityTopper }}
            ></Topper>
          </Box>
          <Box>
            <TextBox
              style={{ y: translateYText1, opacity: translateOpacityText1 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p>Add your wished number of tiers</p>
            </TextBox>
            <TextBox
              style={{ y: translateYText2, opacity: translateOpacityText2 }}
            ></TextBox>
            <TextBox
              style={{ y: translateYText2, opacity: translateOpacityText2 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p>Choose your decorations</p>
            </TextBox>
            <TextBox
              style={{ y: translateYText3, opacity: translateOpacityText3 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p>Pick the perfect topper</p>
            </TextBox>
          </Box>
        </FlexBox>
      </MyBox>
    </ScrollSection>
  );
};
const Title = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  max-width: 66rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  top: 0;
`;
const Box = styled.div`
  width: 29rem;
  position: relative;
  height: 100%;
`;

const Piece = styled(motion.img)`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 10rem;
  left: 4rem;
  width: 22rem;
  height: 16rem;
  @media (max-width: 1000px) {
    left: 0rem;
  }
`;

const Middle = styled(Piece)`
  width: 16rem;
  height: 11rem;
  left: 7rem;
  @media (max-width: 1000px) {
    left: 3rem;
  }
`;
const Top = styled(Piece)`
  width: 10rem;
  height: 9.5rem;
  left: 10rem;
  @media (max-width: 1000px) {
    left: 6rem;
  }
`;

const Decorations = styled(motion.img)`
  transition: all 0.3s ease-out;
  opacity: 0.5;
  position: absolute;
  top: 10rem;
  left: 2rem;
  width: 23rem;
  height: 32rem;
  @media (max-width: 1000px) {
    left: -1rem;
  }
`;
const Topper = styled(motion.img)`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 6rem;
  left: 12rem;
  height: 8rem;
  @media (max-width: 1000px) {
    left: 8rem;
  }
`;

const TextBox = styled(motion.div)`
  transition: all 0.3s ease-out;
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  top: 10rem;
  width: 95%;
  right: 2.5%;
  height: 5rem;
  @media (max-width: 1000px) {
    right: 1%;
  }

  p {
    font-size: 1.5rem;
  }
  svg {
    font-size: 1.5rem;
  }
`;

const FlexBox = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  position: relative;
  gap: 17rem;
  @media (max-width: 1000px) {
    gap: 3rem;
  }
  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

const ScrollSection = styled.div`
  position: relative;
  height: 350vh;
`;

const MyBox = styled.section`
  height: 90vh;
  min-height: 55rem;
  // background: ${({ theme }) => theme.card};
  position: sticky;
  top: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export default ScrollSectionComponent;

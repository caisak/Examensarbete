import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';

interface EnvelopeProps {
    children: React.ReactNode;
}

const Envelope: React.FC<EnvelopeProps> = ({ children }) => {
    const [ffLayer, setFfLayer] = useState<number>(0);
    const { scrollYProgress } = useScroll();
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
    const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200]);
    const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0]);

    scrollYProgress.onChange(x => {
        setFfLayer(x > 0.4 ? -1 : 0);
    });

    return (
        <StyledEnvelope
            style={{
                scale: scaleAnim,
                y: yPosAnim,
                rotateZ: zRotAnim,
            }}
        >
            {children}
            <Frontface style={{ zIndex: ffLayer }}>
                <button onClick={() => window.scrollTo(0, 1500)}>Open Me</button>
            </Frontface>
        </StyledEnvelope>
    );
};

// Styled components
const StyledEnvelope = styled(motion.div)`
    width: 28rem;
    height: 15rem;
    scale: 1;
    position: fixed;
    top: 10rem;
    left: calc(50% - 14rem);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 150px 10px;
`;

const Frontface = styled.div`
width: 100%;
height: 100%;
background-color: #debda1;
position: absolute;
left: 0;
top: 0;
display: flex;
justify-content: center;
align-items: center;
`;

export default Envelope;

import styled from '@emotion/styled';
import { Flex } from '@components/common/Flex';
import { Footer } from '@components/common/Footer';

const Home = () => {
  return (
    <Wrapper direction="column" align="center">
      <div></div>

      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled(Flex)``;

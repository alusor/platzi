import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

const Container = styled(LinearGradient)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ({children}) => (
    <Container colors={['#000', '#1e1e1e']}>
        {children}
    </Container>
);
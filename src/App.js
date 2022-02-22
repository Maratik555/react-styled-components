import React from 'react';
import styled from 'styled-components'
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 2rem;
background: #020E00;
`

const App = () => {
    const onCl = () => {
 // eslint-disable-next-line no-restricted-globals
        const name = confirm('styled-components')
        if (name) {
            alert(`✔😋`)
        } else {
            alert(`😢`)
        }
 
}


    return (
        <AppWrapper>
            <Flex justify="center">
                <Title color="green" >Console cmd 2022. Maratik555</Title>
            </Flex>
            <Flex direction="column" margin={"10px 0"}>
               <Console/>
              <Button onClick={onCl} color="green"  align="flex-end"primary>Отправить</Button>
            </Flex>
        </AppWrapper>
    );
};

export default App;

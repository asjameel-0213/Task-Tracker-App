import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => (props.dark ? "#333" : "#fff")};
    color: ${(props) => (props.dark ? "#fff" : "#000")};
    padding: 20px;
    text-align: center;
    min-height: 100vh;
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.dark ? "#fff" : "#333")};
    color: ${(props) => (props.dark ? "#000" : "#fff")};
`;

function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    return (
        <Container dark={dark}>
        <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
        <Button dark={dark} onClick={() => setDark(!dark)}>Toggle Mode</Button> <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos, pariatur commodi quidem repudiandae vitae debitis magnam neque nisi autem nesciunt, deserunt labore. Corrupti odio sit aut harum, officiis reprehenderit.
        </Container>
        
    );
}

export default DarkModeToggle;
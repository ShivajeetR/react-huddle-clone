import React from "react";
import { Container } from "./styles/Container.styled";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import content from "./content";
import Card from "./Card";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

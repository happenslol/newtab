import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faRedditAlien,
  faTwitch,
  faYoutube,
  faBitbucket,
  faGithub,
  faGitlab,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons"

function App() {
  return (
    <>
      <Global />
      <Container>
        <Inner>
          <Section>
            <h1 className="heading">General</h1>

            <a href="https://mail.google.com">
              <SiteIcon icon={faEnvelope} />
            </a>

            <a href="https://reddit.com">
              <SiteIcon icon={faRedditAlien} />
            </a>

            <a href="https://twitch.tv">
              <SiteIcon icon={faTwitch} />
            </a>

            <a href="https://youtube.com">
              <SiteIcon icon={faYoutube} />
            </a>

            <a href="https://amazon.de">
              <SiteIcon icon={faAmazon} />
            </a>
          </Section>

          <Section>
            <h1 className="heading">Code</h1>

            <a href="https://github.com">
              <SiteIcon icon={faGithub} />
            </a>

            <a href="https://gitlab.com">
              <SiteIcon icon={faGitlab} />
            </a>

            <a href="https://bitbucket.org">
              <SiteIcon icon={faBitbucket} />
            </a>
          </Section>
        </Inner>
      </Container>
    </>
  )
}

const Inner = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const SiteIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 4rem;
  opacity: 0.6;
  padding: 1rem 2rem;
  transition: opacity 0.15s linear;

  &:hover {
    opacity: 1;
  }
`

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 4rem;
  position: relative;
  padding-top: 2rem;

  .heading {
    color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: -1.3rem;
    font-size: 0.9rem;
    left: 1rem;
    background: #212121;
    padding: 0 0.4rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Noto Sans", sans-serif;
  }
`

const Global = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");

  body {
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #212121;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default App

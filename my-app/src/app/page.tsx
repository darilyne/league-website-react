"use client";

import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <Container fluid className="px-0" id="navbar">
<Navbar expand="lg" variant="dark" className="px-4 nav-black">
  <Container className="px-0">
    {/* Brand stays visible always */}
    <Navbar.Brand href="/" className="d-flex align-items-center">
      <img src="/riot-games-logo.svg" alt="Riot Games Logo" id="riotLogo" width={85} />
    </Navbar.Brand>

    {/* Hamburger button shows < lg */}
    <Navbar.Toggle aria-controls="mainNav" />

    {/* Collapsible content */}
    <Navbar.Collapse id="mainNav">
      {/* LEFT side (logos + primary nav) */}
      <Nav className="align-items-center">
        <Navbar.Brand href="/">
          <img src="/league-down-arrow.svg" alt="Logo Down Arrow" id="logoDownArrow" />
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <img src="/league-logo.svg" alt="League of Legends Logo" id="leagueLogo" width={25} />
        </Navbar.Brand>

        <Nav className="navbar-nav">
          <Nav.Item className="navbar-item"><Nav.Link href="#" className="nav-link">Game</Nav.Link></Nav.Item>
          <Nav.Item className="navbar-item"><Nav.Link href="#" className="nav-link">Champions</Nav.Link></Nav.Item>
          <Nav.Item className="navbar-item">
        <Nav.Link href="#" className="nav-link d-inline-flex align-items-center gap-1">
         <span>News</span>
       <img src="/league-down-arrow.svg" className="downArrow" alt="" width={12} height={12} />
       </Nav.Link>
        </Nav.Item>

          <Nav.Item className="navbar-item"><Nav.Link href="#" className="nav-link">Patch Notes</Nav.Link></Nav.Item>
          <Nav.Item className="navbar-item">
  <Nav.Link href="#" className="nav-link d-inline-flex align-items-center gap-1">
    <span>Discover</span>
    <img src="/league-down-arrow.svg" className="downArrow" alt="" width={12} height={12} />
  </Nav.Link>
</Nav.Item>

          <Nav.Item className="navbar-item">
  <Nav.Link href="#" className="nav-link d-inline-flex align-items-center gap-1">
    <span>Esports</span>
    <img src="/league-website-arrow.svg" className="Website Arrow" alt="" width={12} height={12} />
  </Nav.Link>
</Nav.Item>

          <Nav.Item className="navbar-item">
  <Nav.Link href="#" className="nav-link d-inline-flex align-items-center gap-1">
    <span>Universe</span>
    <img src="/league-website-arrow.svg" className="Website Arrow" alt="" width={12} height={12} />
  </Nav.Link>
</Nav.Item>
          <Nav.Item className="navbar-item"><Nav.Link href="#" className="nav-link">PBE</Nav.Link></Nav.Item>
          <Nav.Item className="navbar-item">
  <Nav.Link href="#" className="nav-link d-inline-flex align-items-center gap-1">
    <span>More</span>
    <img src="/league-down-arrow.svg" className="downArrow" alt="" width={12} height={12} />
  </Nav.Link>
</Nav.Item>

        </Nav>
      </Nav>

      {/* RIGHT side (search/web/CTA) — collapses under the menu, pushes right on lg+ */}
      <Nav className="ms-lg-auto align-items-center mt-3 mt-lg-0">
        <Navbar.Brand href="/">
          <img src="/league-search-icon.svg" alt="Search Icon" id="searchIcon" width={20} />
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <img src="/league-web-icon.svg" alt="Web Icon" id="webIcon" width={16} />
        </Navbar.Brand>
        <Button as="a" href="/" id="playNow" variant="link">Play Now</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </Container>

      {/* HERO VIDEO */}
      <video
        id="bgVideo"
        className="bg-video"
        src="/katarinaCinamatic.mp4"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* CENTERED LOGO + CTA */}
      <Container id="leagueOfLegendsCenter" className="d-flex flex-column align-items-center justify-content-center">
        <img src="/league-of-legends-logo.png" alt="League of Legends Logo" id="leagueOfLegendsLogo" width={350} />
        <p className="leagueText mt-2">
          League of legends--A 5v5 moba where teams battle to destroy the enemy nexus
        </p>
        <Button as="a" href="#" className="playForFreeText text-decoration-none" id="playForFreeCta" variant="link">
          Play for Free
        </Button>
      </Container>

      {/* FEATURED NEWS HEADER */}
      <Container fluid id="newsHighlights" className="px-0">
  <Navbar expand="lg" className="px-4 bg-transparent border-0">
    <Container className="px-0">
      <Nav className="align-items-center">
        <h2 id="newsHighlightsText" className="m-0">Featured News</h2>
      </Nav>
      <Nav className="ms-auto">
        <Nav.Link href="#" id="viewAllNews" className="d-inline-flex align-items-center gap-1">
          View All
          <img src="/league-link.svg" className="websiteLink" id="websiteLink" width={13} alt="" />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
</Container>


      {/* SPACER */}
      <section style={{ height: "24vh" }} />

      {/* NEWS GRID */}
      <Container fluid className="my-5 news-grid px-5">
        <Row className="g-5">
          <Col xs={12} md={6} lg={4}>
            <a className="news-card" href="#">
              <section className="news-media">
                <img src="/ARAM-Mayhem.jpeg" alt="ARAM Mayhem screenshot" loading="lazy" />
                <span className="zoom-chip" aria-hidden="true">⤢</span>
              </section>
              <section className="news-meta">
                <span className="badge-cat">Game Updates</span><span className="vr mx-2" />
                <time dateTime="2025-10-07">10/7/2025</time>
              </section>
              <h3 className="news-title">New Mode – ARAM: Mayhem</h3>
              <p className="news-excerpt">Choose wild Augments and adapt your build with the new ARAM: Mayhem mode!</p>
            </a>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <a className="news-card" href="#">
              <section className="news-media">
                <img src="/Lee-Sin-TFT.jpeg" alt="TFT Patch 15.6 artwork" loading="lazy" />
                <span className="zoom-chip" aria-hidden="true">⤢</span>
              </section>
              <section className="news-meta">
                <span className="badge-cat">Game Updates</span><span className="vr mx-2" />
                <time dateTime="2025-10-07">10/7/2025</time>
              </section>
              <h3 className="news-title">Teamfight Tactics patch 15.6 notes</h3>
              <p className="news-excerpt">New 2XKO has entered the K.O. Coliseum with cross-over Power-Ups…</p>
            </a>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <a className="news-card" href="#">
              <section className="news-media">
                <img src="/TFT-news.jpeg" alt="Revival Uncharted Realms art" loading="lazy" />
                <span className="zoom-chip" aria-hidden="true">⤢</span>
              </section>
              <section className="news-meta">
                <span className="badge-cat">Game Updates</span><span className="vr mx-2" />
                <time dateTime="2025-10-06">10/6/2025</time>
              </section>
              <h3 className="news-title">Revival: Uncharted Realms Updates</h3>
              <p className="news-excerpt">Dragons are back, better than ever.</p>
            </a>
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <footer className="site-footer mt-5">
        {/* top link bar */}
        <section className="footer-top">
          <Container fluid className="d-flex flex-nowrap justify-content-center align-items-center gap-4 px-3 overflow-auto">
            <Nav>
              <Nav.Link href="#" className="ft-top-link">About League of Legends</Nav.Link>
              <Nav.Link href="#" className="ft-top-link">Help Us Improve</Nav.Link>
              <Nav.Link href="#" className="ft-top-link">Server Status</Nav.Link>
              <Nav.Link href="#" className="ft-top-link">Support</Nav.Link>
              <Nav.Link href="#" className="ft-top-link">Esports Pro Site</Nav.Link>
              <Nav.Link href="#" className="ft-top-link">Download Riot Mobile Companion App</Nav.Link>
            </Nav>
          </Container>
        </section>

        {/* main dark area */}
        <section className="footer-main">
          <Container className="py-5">
            {/* social pills */}
            <Nav className="justify-content-center gap-3 mb-4">
              <Nav.Link className="social-pill" aria-label="YouTube" href="#"><i className="bi bi-youtube" /></Nav.Link>
              <Nav.Link className="social-pill" aria-label="X" href="#"><i className="bi bi-twitter-x" /></Nav.Link>
              <Nav.Link className="social-pill" aria-label="Facebook" href="#"><i className="bi bi-facebook" /></Nav.Link>
              <Nav.Link className="social-pill" aria-label="Instagram" href="#"><i className="bi bi-instagram" /></Nav.Link>
              <Nav.Link className="social-pill" aria-label="Reddit" href="#"><i className="bi bi-reddit" /></Nav.Link>
            </Nav>

            {/* Riot logo */}
            <section className="text-center mb-3">
              <img src="/riot-games-logo.svg" alt="Riot Games" height={36} className="footer-logo" />
            </section>

            {/* legal line */}
            <p className="legal text-center mb-5">
              ™ &amp; © 2025 Riot Games, Inc. League of Legends and all related logos, characters, names and distinctive likenesses
              thereof are exclusive property of Riot Games, Inc. All Rights Reserved.
            </p>

            {/* policy links */}
            <Nav className="justify-content-center gap-5 mb-4 flex-wrap">
              <Nav.Link href="#" className="ft-policy">Privacy Notice</Nav.Link>
              <Nav.Link href="#" className="ft-policy">Terms of Service</Nav.Link>
              <Nav.Link href="#" className="ft-policy">Cookie Preferences</Nav.Link>
            </Nav>

            {/* ESRB card */}
            <Container className="d-flex justify-content-center">
              <section className="esrb-card">
                <Row className="align-items-center g-3">
                  <Col xs="auto"><img src="/teen-rating.png" alt="ESRB Teen" height={96} /></Col>
                  <Col>
                    <section className="esrb-text">
                      <div>Blood</div>
                      <div>Fantasy Violence</div>
                      <div>Mild Suggestive Themes</div>
                      <div>Use of Alcohol and Tobacco</div>
                      <div>Online Interactions Not Rated by the ESRB</div>
                    </section>
                  </Col>
                </Row>
              </section>
            </Container>
          </Container>
        </section>
      </footer>
    </main>
  );
}

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  FaHome,
  FaUserSecret,
  FaLinkedin,
  FaGithub,
  FaHashtag,
  FaCode
} from 'react-icons/fa'

const Sidebar = styled.div`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 20%;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 20%;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 10%;
    justify-content: flex-start;
    align-items: center;

    &::before {
      content: '';
      margin: 10px;
    }
  }

  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #193549;
  color: #dcdcdc;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 80px;
    height: 80px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  border-radius: 50%;
  overflow: hidden;
  width: 152px;
  height: 152px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const StyledHref = styled.a`
  text-decoration: none;
  color: inherit;
`

const MenuWrapper = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    div {
      margin: 0;
    }
    span {
      display: none;
    }
  }

  display: flex;
  flex-direction: row;
  div {
    margin: 10px;
  }
`

const SiteTitle = styled.h1`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 16px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

const NameBoard = styled.h5`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 12px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

export default ({ title, authorName }) => (
  <Sidebar>
    <StyledLink to="/">
      <SiteTitle>{title}</SiteTitle>
    </StyledLink>
    <Logo
      src="https://res.cloudinary.com/b2b-webmasters/image/upload/v1547133276/DSC_1715.jpg"
      alt={authorName}
    />
    <NameBoard>{authorName}</NameBoard>
    <h2>
      <a style={{ color: `white`, textDecoration: `none`, fontWeight: `strong` }} href="https://www.garethdavies.tech"> <FaCode /> Business Website</a></h2>
    <MenuWrapper>
      <div>
        <p>
          <StyledLink to="/">
            <FaHome /> <span>Home</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/about">
            <FaUserSecret /> <span>About</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/tags">
            <FaHashtag /> <span>Catogories</span>
          </StyledLink>
        </p>
      </div>
      <div>

      </div>
    </MenuWrapper>
  </Sidebar>
)

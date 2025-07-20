//StyledComponents.js

import { Link } from 'react-router-dom';
import styled from 'styled-components';

// NavBar
export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.navText};
  padding: 18px 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 12px 8px;
  }
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navText};
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

export const NavLinkItem = styled.li``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.navText};
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s;
  &:hover {
    color: #0077cc;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 8px;
    text-align: center;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 32px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh; // תוספת שמונעת חיתוך
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.titleColor || theme.text};
  text-align: center;
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 7px;
  padding: 10px 22px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  margin: 8px 0;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 13px 0;
    font-size: 1.08rem;
    margin: 6px 0;
  }
`;

// FormContainer רספונסיבי
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px;
  background-color: ${({ theme }) => theme.containerBackground};
  border: 1px solid ${({ theme }) => theme.containerBorder};
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto 40px auto;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  width: 100%;
  min-height: 60vh;

  @media (max-width: 600px) {
    padding: 5vw 3vw 6vw 3vw;
    max-width: 98vw;
    width: 98vw;
    min-width: unset;
    margin: 0 auto 6vw auto;
    border-radius: 7px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.03);
  }
`;

// CV Card
export const CvCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground || '#fff'};
  color: ${({ theme }) => theme.cardText || '#000'};
  border: 1px solid ${({ theme }) => theme.containerBorder};
  border-radius: 12px;
  padding: 24px;
  margin: 24px auto;
  max-width: 700px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.07);

  @media (max-width: 600px) {
    padding: 14px 2vw;
    margin: 12px auto;
    max-width: 96vw;
  }
`;

// CV Section
export const CvSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.containerBorder};
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const PdfWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  max-width: 750px;
  margin: 32px auto 0 auto;
  padding: 32px 24px 24px 24px; // בלי רווח מיותר למטה
  font-family: 'Segoe UI', Arial, sans-serif;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.containerBorder};
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 98vw;
    width: 98vw;
    padding: 7vw 3vw 4vw 3vw;
    border-radius: 7px;
    margin: 10px auto 0 auto;
  }
`;



export const SectionTitle = styled.h2`
  font-size: 1.18rem;
  margin-bottom: 6px;
  margin-top: 23px;
  color: ${({ theme }) => theme.sectionTitle};
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.08rem;
    margin-top: 18px;
  }
`;

export const Name = styled.h1`
  font-size: 1.65rem;
  margin-bottom: 0.3em;
  color: ${({ theme }) => theme.sectionTitle};
  font-family: 'Segoe UI', Arial, sans-serif;
  @media (max-width: 600px) {
    font-size: 1.25rem;
    margin-bottom: 0.25em;
  }
`;

export const Detail = styled.div`
  font-size: 1rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 600px) {
    font-size: 0.92rem;
    margin-bottom: 13px;
  }
`;

export const Sub = styled.div`
  color: #777;
  font-size: 1rem;
  margin-bottom: 4px;
  @media (max-width: 600px) {
    font-size: 0.91rem;
  }
`;

export const List = styled.ul`
  padding-left: 18px;
  margin-bottom: 0;
  @media (max-width: 600px) {
    padding-left: 13px;
    font-size: 0.98rem;
  }
`;

export const PdfButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 7px;
  padding: 12px 0;
  font-size: 1.07rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 22px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }
  @media (max-width: 600px) {
    padding: 14px 0;
    font-size: 1.08rem;
    margin-top: 15px;
    border-radius: 6px;
  }
`;

// Other styled components 

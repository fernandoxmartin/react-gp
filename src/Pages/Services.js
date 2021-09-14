import React from "react";
import styled from "styled-components";
import { Hero } from "../Components/Hero";
import { Layout } from "../Components/Layout";
import ServicesImage from "../Assets/services.jpeg";

export const Services = () => {
  return (
    <Layout>
      <Hero image={ServicesImage} title="Services" />
      <ServiceContainer>
        <Service>
          <h2>Maintenance and Repairs</h2>
          <p>
            Guitar & Pedal is your go to stop for all guitar repairs. Whether
            it’s just a rountine maintenance check up, or a full on repair, we
            got you covered. Our experienced guitarsmiths have been helping our
            customers prolong the life of their most cherished instrument. Below
            is a list of our repair abilities:
          </p>
          <Repairs>
            <ul>
              <li>
                <span>Restrings</span>
              </li>
              <li>
                <span>Inotation</span>
              </li>
              <li>
                <span>Truss rod adjustment</span>
              </li>
              <li>
                <span>Refretting</span>
              </li>
              <li>
                <span>Fret Leveling</span>
              </li>
              <li>
                <span>Electronic Modification</span>
              </li>
              <li>
                <span>Pickup Installation</span>
              </li>
              <li>
                <span>Wiring Customization</span>
              </li>
              <li>
                <span>Upgrades</span>
              </li>
              <li>
                <span>Modifications</span>
              </li>
              <li>
                <span>Cosmetic Enhancements</span>
              </li>
              <li>
                <span>Hardware Customization</span>
              </li>
              <li>
                <span>Nut/Saddle Replacements</span>
              </li>
              <li>
                <span>Crack Repairs</span>
              </li>
              <li>
                <span>Many More ...</span>
              </li>
            </ul>
          </Repairs>
        </Service>
        <Service>
          <h2>Lessons</h2>
          <p>
            Want to learn that song you’ve been dieing to master? Or maybe take
            a general class? Perhaps you’re just eager to get your feet wet. We
            got you covered, we have classes going on every week, call or come
            in for schedules and booking availability.
          </p>
          <Asterisk>* booking availability may vary from week to week</Asterisk>
        </Service>
        <Offers>
          <Offer>
            <h2>Free Shipping</h2>
            <p>
              All orders over $100 will be eligible for FREE Shipping. Only US
              addresses, except Alaska, Puerto Rico.
            </p>
          </Offer>
          <Offer>
            <h2>Lowest Prices</h2>
            <p>
              We offer the lowest prices. Don’t believe us? Find a lower price
              and we’ll price match it.
            </p>
          </Offer>
          <Offer>
            <h2>30-Day Returns</h2>
            <p>
              We don’t need to make things difficult, if you change your mind,
              simply return the item with your receipt.
            </p>
          </Offer>
        </Offers>
      </ServiceContainer>
    </Layout>
  );
};

const ServiceContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: ${({ theme }) => theme.sizes.md};
  }
  p {
    padding: 1rem 0 1rem 0;
    font-size: ${({ theme }) => theme.sizes.xs};
    font-family: ${({ theme }) => theme.fonts.alternate};
  }
`;
const Service = styled.div`
  width: 100%;
  margin: 2rem 0 2rem 0;
`;
const Offers = styled.div`
  width: 100%;
  margin: 2rem 0 4rem 0;
`;
const Offer = styled.div``;
const Repairs = styled.div`
  padding-bottom: 1rem;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    li {
      list-style-position: inside;
      padding: 0.2rem;
      span {
        margin-left: -0.5rem;
        font-family: ${({ theme }) => theme.fonts.alternate};
        font-size: ${({ theme }) => theme.sizes.xs};
      }
    }
  }
`;
const Asterisk = styled.p`
  font-style: italic;
  font-size: 0.5rem;
`;

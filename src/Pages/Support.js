import React from "react";
import styled from "styled-components";
import { Hero } from "../Components/Hero";
import { FAQ } from "../Components/FAQ";
import { questions } from "../questions";
import { Layout } from "../Components/Layout";
import SupportImage from "../Assets/support.jpg";

export const Support = () => {
  return (
    <Layout>
      <Hero image={SupportImage} title="Support" />
      <SupportContainer>
        <FAQContainer>
          <h2>Frequently Asked Questions</h2>
          {questions.map(({ question, answer, id }) => (
            <FAQ question={question} answer={answer} key={id} />
          ))}
        </FAQContainer>
        <Contact>
          <p>Don't see your question? Email Us.</p>
          <Form>
            <FormGroup>
              <label>
                <h3>Name</h3>
              </label>
              <input type="text" placeholder="John Doe" />
            </FormGroup>
            <FormGroup>
              <label>
                <h3>Email</h3>
              </label>
              <input type="email" placeholder="john.doe@example.com" />
            </FormGroup>
            <FormGroup>
              <label>
                <h3>Message</h3>
              </label>
              <textarea></textarea>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Contact>
      </SupportContainer>
    </Layout>
  );
};

const FAQContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 4rem;
  h2 {
    font-family: ${({ theme }) => theme.fonts.default};
  }
`;

const SupportContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Contact = styled.div`
  width: 100%;
  margin: 0 auto;
  p {
    font-family: ${({ theme }) => theme.fonts.alternate};
    font-size: ${({ theme }) => theme.sizes.xs};
    padding-bottom: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    width: 80%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  label {
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: ${({ theme }) => theme.sizes.md};
  }
  input {
    height: 3rem;
    margin: 1rem 0 1rem 0;
    background: #dedede;
    border: none;
    padding: 1rem;
    border-radius: 5px;
    font-family: ${({ theme }) => theme.fonts.alternate};
  }
  textarea {
    height: 10rem;
    margin: 1rem 0 1rem 0;
    background: #dedede;
    border: none;
    padding: 1rem;
    border-radius: 5px;
    font-family: ${({ theme }) => theme.fonts.alternate};
  }
`;
const Button = styled.button`
  height: 3rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.sizes.button};
  letter-spacing: 1px;
`;

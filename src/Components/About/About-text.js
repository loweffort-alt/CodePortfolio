import styled from "@emotion/styled"

const Font = styled.section`
font-family: Raleway;
color: #f7f7f7;
text-shadow: 0.2em 0.2em black;
position: absolute;
right: 0px;
z-index: 3;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 50%;
text-align: right;
h1 {
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
};
h2 {
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
};
h3 {
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.02em;
};
@media (max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 75px;
  height: 115%;
  width: 100%;
  h1 {
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 0.06em;
  };
  h2 {
    font-size: 22px;
  };
  h3 {
    font-size: 20px;
  };
};
`

export const TextAbout = () => {
  return <Font>
    <h1>
    Technology  is already part of our identity as humans.
    </h1>
    <h3>
    For me, programming is the most direct and innovative way to understand and build the Internet, this drives me to learn various technologies without forgetting other passions such as music and physics.
    </h3>
    <h2>
    Very excited to work in a diverse and innovative team.
    </h2>
  </Font>
}
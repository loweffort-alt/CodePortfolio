import styled from "@emotion/styled"

const Font = styled.section`
background: rgba(200,20,150,0.2);
font-family: Raleway;
color: #f7f7f7;
line-height: 56px;
text-shadow: 0.2em 0.2em black;
h1 {
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
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
position: absolute;
right: 0px;
z-index: 3;
@media (max-width: 450px) {
  line-height: 75px;
  text-align: center;
}
`

export const TextAbout = () => {
  return <Font>
    <h1>
    "Technology  is already part of our identity as humans."
    </h1>
    <h3>
    For me, programming is the most direct and innovative way to understand and build the Internet, this drives me to learn various technologies without forgetting other passions such as music and physics.
    </h3>
    <h2>
    Very excited to work in a diverse and innovative team.
    </h2>
  </Font>
}
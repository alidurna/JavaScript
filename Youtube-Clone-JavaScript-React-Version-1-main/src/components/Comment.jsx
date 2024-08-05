import React from "react";
import styled from "styled-components";
// --------------------------
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;
// --------------------------

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://www.gamespot.com/a/uploads/scale_landscape/1603/16030002/3995309-lord-of-the-rings-harvey-weinstein-orc.jpg" />
      <Details>
        <Name>
          Orc General <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          iusto reprehenderit at quisquam vitae molestias dolores minima
          blanditiis nostrum laborum, vel ad dolorum ducimus maiores quidem
          distinctio. Labore, iste distinctio.
        </Text>
      </Details>
    </Container>
  );
};
// --------------------------
export default Comment;

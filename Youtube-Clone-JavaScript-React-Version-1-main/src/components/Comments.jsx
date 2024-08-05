import React from "react";
import styled from "styled-components";
import Comment from "../components/Comment";
// -----------------------------

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;
// -----------------------------

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://cdn.vox-cdn.com/thumbor/JRYMi6sKrstBmsnDg5pxwM0nLXI=/0x0:4000x2534/1200x800/filters:focal(1491x677:2131x1317)/cdn.vox-cdn.com/uploads/chorus_image/image/71321060/CREDIT_BEN_ROTHSTEIN_PRIME_VIDEO_00204_R2.0.jpeg" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

// -----------------------------

export default Comments;

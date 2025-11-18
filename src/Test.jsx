import styled from "styled-components";

export default function Test() {
  return <Container>이건 빨간 글자입니다.</Container>;
}

const Container = styled.div`
  color: red;
`;

const Yeah = styled.span`
  padding: 1px;
`;

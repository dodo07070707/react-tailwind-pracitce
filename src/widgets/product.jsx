// Product.jsx
import styled from "styled-components";

const SingleImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductImg = styled.img`
  width: 80%;
`;

const ProductTitle = styled.h4``;

const ProductContent = styled.p``;

export default function Product({ title, content, img }) {
  return (
    <SingleImage>
      <ProductImg src={img} />
      <ProductTitle>{title}</ProductTitle>
      <ProductContent>{content}</ProductContent>
    </SingleImage>
  );
}

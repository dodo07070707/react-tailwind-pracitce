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

const ProductTitle = styled.h3`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.2px;
`;

const ProductContent = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.2px;
`;

export default function Product({ title, content, img }) {
  return (
    <SingleImage>
      <ProductImg src={img} />
      <ProductTitle>{title}</ProductTitle>
      <ProductContent>{content}</ProductContent>
    </SingleImage>
  );
}

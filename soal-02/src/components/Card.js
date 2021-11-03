import {
    CardContainer,CardImage,
    CardBody, CardProductName,
    CardPrice,CardTitle,
    CardText,
  } from "./styles/Card";
  import Button from "./Button";
  import styled from "styled-components";
  
  const ViewportCenter = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
  `;
  
  const Card = (props) => {
    return (
      <ViewportCenter>
        <CardContainer width="500px">
          <CardImage src={props.data.imageUrl} />
          <CardBody>
            <CardPrice>{props.data.price}</CardPrice>
            <CardProductName>{props.data.productName}</CardProductName>
            <Button />
          </CardBody>
        </CardContainer>
      </ViewportCenter>
    );
  };
  export default Card;
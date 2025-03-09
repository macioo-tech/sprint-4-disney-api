import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px;
    border-radius: 5px;
    padding: 5px;
    background-color: #fff;
    border: 2px solid #ed03ed;
    align-items: center;

`

const Name = styled.h2`
 font-size: 16px;
 font-weight: bold;
 color: #000;
    
`

const ImageContainer = styled.div`
  max-width: 400px;
  overflow: auto;
  resize: horizontal;
`;

const Image = styled.img`
  max-width: 100%;
  display: block;
`;

const ListElement = ({ item }) => {
  const { name, imageUrl } = item || {};

  console.log('name:', name)
  console.log('imageUrl', imageUrl)

  return (
    <Container>
      <Name>{name}</Name>
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <button>Learn</button>
    </Container>
  );
};

export default ListElement;

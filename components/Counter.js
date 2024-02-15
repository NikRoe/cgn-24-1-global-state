import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnimalName = styled.strong`
  width: 5rem;
`;

export default function Counter({
  animalName,
  count,
  handleAdd,
  handleSubtract,
  id,
}) {
  return (
    <Container>
      <AnimalName>{animalName}:</AnimalName>
      <button type="button" onClick={() => handleSubtract(id)}>
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => handleAdd(id)}>
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </Container>
  );
}

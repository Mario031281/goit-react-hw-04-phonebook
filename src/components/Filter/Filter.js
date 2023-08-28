import { InputFilter, Title, FilterContainer } from './Filter.styled';

export const FilterContact = ({ contactFilter, onChangeContact }) => {
  return (
    <FilterContainer>
      <Title>Find contacts by name</Title>
      <InputFilter
        type="text"
        onChange={onChangeContact}
        values={contactFilter}
      />
    </FilterContainer>
  );
};

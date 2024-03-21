import {
  FilterWrap,
  LocationWrap,
  LocationInputWrapper,
  Form,
  LocationInput,
  Label,
  Icon,
  FilterText,
} from "./Filter.styled";
import sprite from "assets/Images/sprite.svg";

export const Filter = () => {
  return (
    <FilterWrap>
      <LocationWrap>
        <LocationInputWrapper>
          <Form>
            <Label>Location</Label>
            <LocationInput />
            <Icon>
              <use href={`${sprite}#map-pin`} aria-label="pin icon"></use>
            </Icon>
          </Form>
        </LocationInputWrapper>
      </LocationWrap>
      <FilterText>Filters</FilterText>
    </FilterWrap>
  );
};

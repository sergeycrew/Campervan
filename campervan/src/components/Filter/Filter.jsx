import {
  FilterWrap,
  LocationWrap,
  Location,
  LocationInputWrapper,
  Form,
  LocationInput,
  Label,
  Icon,
} from "./Filter.styled";
import sprite from "assets/Images/sprite.svg";

export const Filter = () => {
  return (
    <FilterWrap>
      <LocationWrap>
        <Location>Location</Location>
        <LocationInputWrapper>
          <Form>
            <LocationInput />
            <Label />
            <Icon>
              <use href={`${sprite}#map-pin-2`} aria-label="pin icon"></use>
            </Icon>
          </Form>
        </LocationInputWrapper>
      </LocationWrap>
    </FilterWrap>
  );
};


import {  Col, Row,Button } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

const SearchInput = (props: any) => {
  return (
    <Row>
      <Col sm={11}>

        <AsyncTypeahead
          id="autocomplete-input"
          labelKey={(option: any) => (option[props.searchCriteria] ? option[props.searchCriteria] : '')} 
          isLoading={false}
          onSearch={props.handleSearchForSugggestions}
          options={props.suggestionList}
          placeholder="Search"
          onChange={(selected) => {
            if (selected.length > 0) {
              props.handleInputChange(selected[0]);
            }
          }}
        />
      </Col>
      <Col sm={1}>
        <Button variant="primary" onClick={() => props.filterSearchResultsForSuggestionSelection()}>
          Search
        </Button>
      </Col>
    </Row>

    // </Container>
  );
};

export default SearchInput;

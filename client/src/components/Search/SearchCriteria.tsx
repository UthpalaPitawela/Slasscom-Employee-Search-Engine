import { ButtonToolbar, Button } from "react-bootstrap";
import { SearchCriteriaContants } from "../../constants/searchCriteria";

const SearchCriteria = (props: any) => {
  const buttons = [
    { value: SearchCriteriaContants.FULL_NAME, text: "Name" },
    { value: SearchCriteriaContants.SPECIALIZATION, text: "Specialization" },
    { value: SearchCriteriaContants.DESIGNATION, text: "Designation" },
    { value: SearchCriteriaContants.CURRENT_WORKPLACE, text: "Current Workplace" },
    { value: SearchCriteriaContants.PROFESSIONAL_INSTITUTE, text: "Institute" },
  ];

  const handleButtonClick = (buttonValue: string) => {
    props.handleSelectCriteria(buttonValue);
  };

  return (
    <ButtonToolbar className="justify-content-between">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={
            props.searchCriteria === button.value ? "primary" : "secondary"
          }
          onClick={() => handleButtonClick(button.value)}
        >
          {button.text}
        </Button>
      ))}
    </ButtonToolbar>
  );
};

export default SearchCriteria;

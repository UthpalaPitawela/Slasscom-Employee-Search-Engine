import { ButtonToolbar, Button } from "react-bootstrap";

const SearchCriteria = (props: any) => {
  const buttons = [
    { value: "fullName", text: "Name" },
    { value: "specialization", text: "Specialization" },
    { value: "designation", text: "Designation" },
    { value: "currentWorkplace", text: "Current Workplace" },
    { value: "institute", text: "Institute" },
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

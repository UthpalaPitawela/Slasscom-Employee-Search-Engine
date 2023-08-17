import React from 'react';
import MemberField from "../../components/Member/MemberField";
import { render, screen } from '@testing-library/react';

const mockData = {
  resultItem: "Software Engineer",
  resultLabel: "designation"
}

test("List renders successfully", () => {
    render(<MemberField {...mockData} />)

    const elementWithText = screen.getByText(/designation/i);

    expect(elementWithText).toBeInTheDocument();
  });

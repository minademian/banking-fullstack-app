import React, { useState } from "react";

export function SalaryWidget(props: { salary: number }) {
  const [salary, updateSalary] = useState(props.salary);

  return <p>salary is {salary}</p>;
}

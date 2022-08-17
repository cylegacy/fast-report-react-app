import { Fragment, FC, useState } from "react";

export const Report: FC = () => {
  const [value, setValue] = useState("");
  const options = [
    {
      value: "-- Select report name --",
    },
    {
      value: "Matrix",
    },
    {
      value: "Master-Detail",
    },
    {
      value: "QR-Codes",
    },
    {
      value: "Highlight",
    },
    {
      value: "Image",
    },
  ];

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const createMarkup = (name: string) => {
    return {
      __html: `<iframe height="100%" width="100%" src="https://www.fastreport.ru/documentation/UserManFrNET-ru/index.html?datafiltering.htm"/>`, //src="http://localhost:3001/api/Report/DisplayReport?name=${name}
    };
  };
  const getReport = (name: string) => {
    return name ? (
      <div
        style={{ height: "95vh", width: "100%" }}
        dangerouslySetInnerHTML={createMarkup(name)}
      />
    ) : (
      <div />
    );
  };

  return (
    <div>
      <div>
        <Fragment>
          <select onChange={handleChange} value={value}>
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </Fragment>
      </div>
      {getReport(value)}
    </div>
  );
};

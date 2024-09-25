import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen} from "@testing-library/react";
import { InputProvider } from "../context/inputContext";
import Main from "../components/Main/Main";
import Search from "../components/Search/Search";

test("проверка на текст ошибки", () => {
  render(
    <InputProvider>
      <Search />
      <Main />
    </InputProvider>
  );

  const searchButton = screen.getByTestId("button");
  fireEvent.click(searchButton);

  const errorMessage = screen.getByText("Ввод не может содержать пробелы.");
  expect(errorMessage).toBeInTheDocument();
});

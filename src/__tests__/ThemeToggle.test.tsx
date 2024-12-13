import { render, fireEvent } from "@testing-library/react";
import ThemeToggle from "../component/ThemeToggle";

describe("ThemeToggle Component", () => {
  const mockSwitchTheme = jest.fn();

  test("test_theme_toggle_switches_theme", () => {
    const { getByRole } = render(
      <ThemeToggle switchTheme={mockSwitchTheme} isDarkMode={false} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(mockSwitchTheme).toHaveBeenCalledTimes(1);
  });
});

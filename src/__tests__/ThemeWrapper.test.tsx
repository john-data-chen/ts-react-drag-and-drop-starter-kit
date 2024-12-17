import { render } from "@testing-library/react";
import { ThemeWrapper } from "../component/ThemeWrapper";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../theme/ThemeSets";

jest.mock("../hooks/useTheme");
const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

describe("ThemeWrapper", () => {
  const TestChild = () => {
    return (
      <div>
        <h1>Test Child</h1>
      </div>
    );
  };

  it("test_theme_wrapper_renders_dark_theme", () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: true,
      handleSwitchTheme: jest.fn(),
    });

    const { container } = render(
      <ThemeWrapper>
        <TestChild />
      </ThemeWrapper>
    );

    expect(container.firstChild).toHaveStyle(`
      background-color: ${darkTheme.backgroundColor}
      color: ${darkTheme.textColor}
    `);
  });

  it("test_theme_wrapper_renders_light_theme", () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      handleSwitchTheme: jest.fn(),
    });

    const { container } = render(
      <ThemeWrapper>
        <TestChild />
      </ThemeWrapper>
    );

    expect(container.firstChild).toHaveStyle(`
      background-color: ${lightTheme.backgroundColor}
      color: ${lightTheme.textColor}
    `);
  });
});

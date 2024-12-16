import { render } from "@testing-library/react";
import AppTitle from "../component/AppTitle";
import { useTranslation } from "react-i18next";

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(),
}));

describe("AppTitle Component", () => {
  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({
      t: (key: string) => (key === "app-title" ? "Translated Title" : key),
    });
  });

  test("test_renders_h1_with_class_appTitle", () => {
    const { getByTestId } = render(<AppTitle />);
    const titleElement = getByTestId("appTitle");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement).toHaveClass("appTitle");
  });

  test("test_renders_translated_text_for_app_title", () => {
    const { getByTestId } = render(<AppTitle />);
    const titleElement = getByTestId("appTitle");
    const { t } = useTranslation();
    expect(titleElement).toHaveTextContent(t("app-title"));
    expect(titleElement.getAttribute("aria-label")).toBe(t("app-title"));
  });
});

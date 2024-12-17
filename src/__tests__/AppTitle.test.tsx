import { render } from "@testing-library/react";
import AppTitle from "../component/AppTitle";
import { useTranslation } from "react-i18next";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("AppTitle Component", () => {
  test("test_renders_h1_with_class_appTitle", () => {
    const { getByTestId } = render(<AppTitle />);
    const titleElement = getByTestId("appTitle");
    expect(titleElement).toBeInTheDocument();
    const { t } = useTranslation();
    expect(titleElement).toHaveTextContent(t("app-title"));
  });
});

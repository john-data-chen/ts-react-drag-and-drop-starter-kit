import { renderHook } from "@testing-library/react";
import { useState } from "react";

// Initial state should be 'en' when localStorage is empty
test('should set initial language to "en" when localStorage is empty', () => {
  const getItemSpy = jest.spyOn(Storage.prototype, "getItem");
  getItemSpy.mockReturnValue(null);

  const { result } = renderHook(() =>
    useState(localStorage.getItem("i18nextLng") || "en")
  );
  const [selectedLanguage] = result.current;

  expect(selectedLanguage).toBe("en");
  expect(getItemSpy).toHaveBeenCalledWith("i18nextLng");

  getItemSpy.mockRestore();
});

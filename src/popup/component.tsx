import React, { FunctionComponent } from "react";
import { Hello } from "@src/components/hello";
import { browser } from "webextension-polyfill-ts";

export const Popup: FunctionComponent = () => {
  // Sends the `popupMounted` event
  React.useEffect(() => {
    browser.runtime.sendMessage({ popupMounted: true });
  }, []);

  return (
    <div
      style={{
        minWidth: "500px",
        minHeight: "500px",
        display: "grid"
      }}
    >
      <Hello />
    </div>
  );
};

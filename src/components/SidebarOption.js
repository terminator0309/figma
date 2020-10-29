import React from "react";

export default function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon
        style={{
          "&:hover": {
            color: "linear-gradient(142.25deg, #7cb8f7 20.3%, #2a8bf2 74.69%)",
          },
        }}
      />
      <h3>{text}</h3>
    </div>
  );
}

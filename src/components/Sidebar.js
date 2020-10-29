import React from "react";
import SidebarOption from "./SidebarOption";
import "../css/sidebar.css";
import Home from "@material-ui/icons/HomeRounded";
import {
  ContactsRounded,
  EventNoteRounded,
  SettingsRounded,
  SmsRounded,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <center>
        <img src="https://picsum.photos/70" alt="profile" />
        <h3>Henry Jabbabwokies</h3>
      </center>
      <SidebarOption text="HOME" Icon={Home} />
      <SidebarOption text="CHAT" Icon={SmsRounded} />
      <SidebarOption text="CONTACT" Icon={ContactsRounded} />
      <SidebarOption text="CALENDER" Icon={EventNoteRounded} />
      <SidebarOption text="SETTINGS" Icon={SettingsRounded} />
    </div>
  );
}

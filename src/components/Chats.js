import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "../css/chats.css";

export default function Chats() {
  return (
    <div className="chats">
      <div className="chats-header">
        <h1>Chats</h1>
        <h3 className="create_btn"> + Create New Chat</h3>
      </div>
      <div className="chat-search">
        <TextField
          variant="outlined"
          placeholder="Search"
          id="input-with-icon-search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: "grey" }} />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="chat-items">
        <div className="item">
          <div className="item-header">
            <img src="https://picsum.photos/50" alt="chat-profile" />
            <h3>Luy Robin</h3>
          </div>
          Most of its text is made up from sections 1.10.32–3 of Cicero's De
          finibus bonorum et malorum (On the Boundaries of Goods and Evils;
          finibus may also be translated as purposes).
        </div>

        <div className="item blue-background" style={{ color: "white" }}>
          <div className="item-header">
            <img src="https://picsum.photos/50" alt="chat-profile" />
            <h3>Nika Jerrardo</h3>
          </div>
          Most of its text is made up from sections 1.10.32–3 of Cicero's De
          finibus bonorum et malorum (On the Boundaries of Goods and Evils;
          finibus may also be translated as purposes).
        </div>
      </div>
    </div>
  );
}

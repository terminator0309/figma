import { Button, InputBase } from "@material-ui/core";
import { Add, AttachFile, MoreVert, Send } from "@material-ui/icons";
import React from "react";
import "../css/interaction.css";

export default function Interaction() {
  return (
    <div className="interaction">
      <div className="chat-room">
        <div className="chat-room-header">
          <img src="https://picsum.photos/50" alt="chat-room-profile" />{" "}
          <h4>Nika Jerrardo</h4>
          <div className="chat-room-header-btn">
            <span>
              <Button>
                <AttachFile />
              </Button>
            </span>
            <span>
              <Button>
                <MoreVert />
              </Button>
            </span>
          </div>
        </div>
        <div className="chat-room-msg">
          <center>
            <h1>Your Messages will be displayed here.</h1>
          </center>

          <div className="chat-room-input">
            <div className="chat-room-input-add">
              <Button>
                <Add />
              </Button>
            </div>
            <div className="chat-room-input-msg">
              <InputBase placeholder="Type a message here" />
            </div>
            <div className="chat-room-input-send">
              <Button>
                <Send />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

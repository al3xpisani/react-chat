import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const App = () => {
    // if (!localStorage.getItem("username")) return <LoginForm />;
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName="javascriptmastery"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() =>
                new Audio(
                    "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
                ).play()
            }
        />
    );
};

export default App;

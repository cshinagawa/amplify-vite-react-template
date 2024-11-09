import React from "react";
import ReactDOM from "react-dom/client";
// AWS Cognitoと連携してユーザー認証機能を実装するためのコンポーネント
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>{/* // ラップすることでユーザー認証機能を有効化 */}
      <App />
    </Authenticator>
  </React.StrictMode>
);

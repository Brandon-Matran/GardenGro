import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
const supabase = createClient(
  "https://rsboqalvpnuvzhbvqwjf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYm9xYWx2cG51dnpoYnZxd2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNzExODYsImV4cCI6MjA0MTY0NzE4Nn0.-_kSDM4kxKUNpIHdoMlfa9IKjRNzcoDAlPakJihOdm8"
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </StrictMode>
);

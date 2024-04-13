// import { useState, useEffect } from "react";
// import { supabase } from "./utils/supabase";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import { Login } from "./component/pages/Login";
import { useEffect } from "react";
import { supabase } from "./utils/supabase";
import { Chat } from "./component/pages/Chat";

// type countryType = {
//   id: number;
//   name: string;
//};

function App() {
  useEffect(() => {
    // アプリケーションが動いている間はセッションを常に監視する。
    // セッションが切れた場合は/Loginにリダイレクト。
    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && window.location.pathname !== "/login") {
        window.location.pathname = "/login";
      }
    });
  }, []);
  // const [countries, setCountries] = useState<countryType[] | null>(null);

  // useEffect(() => {
  //   getCountries();
  // }, []);

  // async function getCountries() {
  //   const { data } = await supabase.from("countries").select();
  //   setCountries(data);
  // }

  return (
    // <ul>
    //   {countries &&
    //     countries.map((country) => (
    //       <li key={country?.name}>{country?.name}</li>
    //     ))}
    // </ul>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

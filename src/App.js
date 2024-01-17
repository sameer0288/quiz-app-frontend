import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Mainpage from "./pages/Mainpage";
import TestPage from "./components/others/testpage";
import ProfilePage from "./components/others/profile";
import LeaderboardPage from "./components/others/leaderboard";
import UploadQuestionPage from "./components/others/upload";
import PerformanceGraph from "./components/others/performance";

function App() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/testpage" element={<TestPage />} exact />
          <Route path="/profile" element={<ProfilePage />} exact />
          <Route path="/leaderboard" element={<LeaderboardPage />} exact />
          {userInfo && userInfo.isTeacher && (
            <Route
              path="/uploadQuestion"
              element={<UploadQuestionPage />}
              exact
            />
          )}
          <Route path="/performance" element={<PerformanceGraph />} exact />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;

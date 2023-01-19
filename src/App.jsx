import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllNotes from "./components/Notes/AllNotes";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import PomodoroPage from "./pages/PomodoroPage";
import TodosPage from "./pages/TodosPage";
import UserDashboardPage from "./pages/UserDashboardPage";

function App() {
  return (
    <div className="space-y-10">
      {/* <HomePage /> */}
      {/* <UserDashboardPage /> */}
      {/* <PomodoroPage/> */}
      {/* <TodosPage/> */}

      <Routes>
        {/* <Route path={"/"} element={<UserDashboardPage />} /> */}
        <Route path={"/create-note"} element={<NotesPage />} />
        <Route path={"/notes"} element={<AllNotes/>} />
        <Route path={"/dashboard"} element={<UserDashboardPage />} />
        <Route path={"/pomodoro"} element={<PomodoroPage />} />
        <Route path={"/todos"} element={<TodosPage />} />
      </Routes>
    </div>
  );
}

export default App;

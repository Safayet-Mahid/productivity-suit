import "./App.css";
import HomePage from "./pages/HomePage";
import PomodoroPage from "./pages/PomodoroPage";
import TodosPage from "./pages/TodosPage";
import UserDashboardPage from "./pages/UserDashboardPage";

function App() {
  return (
    <div className="space-y-10">
      {/* <HomePage /> */}
      {/* <UserDashboardPage /> */}
      {/* <PomodoroPage/> */}
      <TodosPage/>
    </div>
  );
}

export default App;

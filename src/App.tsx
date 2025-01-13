import MainLayout from "./components/layout/Main/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;

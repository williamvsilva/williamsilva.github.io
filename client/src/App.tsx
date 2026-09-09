/*
 * Sala de Controle Editorial — aplicação pública de página única para o portfólio.
 */
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Home />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;

import "./App.css"
import { StatusFilterProvider } from "./Provider/StatusProvider";
import { ThemeProvider } from "./Provider/ThemeProvider";
import { Wrapper } from './components/Wrapper/Wrapper';

function App() {
  return (
   <>
   <ThemeProvider>
   <StatusFilterProvider>
      <Wrapper/>
   </StatusFilterProvider>
   </ThemeProvider>
   </>
  );
}

export default App;

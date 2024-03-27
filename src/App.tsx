import "./App.css"
import { ThemeProvider } from "./Provider/ThemeProvider";
import { Wrapper } from './components/Wrapper/Wrapper';

function App() {
  return (
   <>
   <ThemeProvider>
    <Wrapper/>
   </ThemeProvider>
   </>
  );
}

export default App;

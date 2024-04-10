import "./App.css"
import { ModalEditProvider } from "./Provider/ModalEditProviser";
import { StatusFilterProvider } from "./Provider/StatusProvider";
import { ThemeProvider } from "./Provider/ThemeProvider";
import { Wrapper } from './components/Wrapper/Wrapper';

function App() {
  return (
   <>

   <ThemeProvider>
    <StatusFilterProvider>
      <ModalEditProvider>
          <Wrapper/>
      </ModalEditProvider>
    </StatusFilterProvider>
   </ThemeProvider>
   </>
  );
}

export default App;

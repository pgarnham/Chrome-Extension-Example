import BasicCard  from './components/basicCard'
import Container from '@mui/material/Container';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container sx={{ p: 2, bgcolor: 'background.paper' }} maxWidth="lg">
          <BasicCard></BasicCard> 
        </Container>
      </header>
    </div>
  );
}

export default App;

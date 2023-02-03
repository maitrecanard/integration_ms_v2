// == Import
import './styles.css';
import Header from '../Header';
import Main from '../Main';
import exportData from 'src/data';
//import content  from '../../data';


// == Composant
function App() {
  return (
    <>
      <Header />
      <Main 
          name={exportData.name} 
          job={exportData.job} 
          maintenance={exportData.maintenance}
          profil={exportData.profil} />
    </>
  );
}

// == Export
export default App;

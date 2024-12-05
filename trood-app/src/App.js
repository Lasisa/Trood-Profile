
import './App.css';
import Profile from './components/Profile/Profile';
import ProjectsAndTasks from './components/ProjectsAndTasks/ProjectsAndTasks';

function App() {
  return (
    <div className='space'>
      <ProjectsAndTasks/>
      <Profile/>
    </div>
  );
}

export default App;

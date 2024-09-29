import NavBAr from '@components/header';

function App() {
  return (
    <>
      <NavBAr />
      <div id="about" className="flex flex-1 min-h-screen items-center justify-center text-red-600">
        <h1>About</h1>
      </div>
      <div id="skills" className="flex flex-1 min-h-screen items-center justify-center text-red-600">
        <h1>Skills</h1>
      </div>
      <div id="projects" className="flex flex-1 min-h-screen items-center justify-center text-red-600">
        <h1>Projects</h1>
      </div>
      <div id="academics" className="flex flex-1 min-h-screen items-center justify-center text-red-600">
        <h1>Academics</h1>
      </div>
      <div id="contact" className="flex flex-1 min-h-screen items-center justify-center text-red-600">
        <h1>Contact</h1>
      </div>
    </>
  );
}

export default App;

function App() {
  const handleClick = () => {
    window.location.href = "https://mishalturkane.github.io";
  };

  return (
    <div>
      <p>Mishal Turkane</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;

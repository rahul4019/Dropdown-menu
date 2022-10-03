import DropdownMenu from "./DropdownMenu";

function App() {
  const options = [
    {
      language: "C++",
      logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      language: "JavaScript",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      language: "Python",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      language: "Java",
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      language: "Swift",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732250.png",
    },
    {
      language: "Programming Languages",
      logo: "https://cdn-icons-png.flaticon.com/512/1810/1810746.png"
    }
  ];

  return <DropdownMenu options={options} />;
}

export default App;

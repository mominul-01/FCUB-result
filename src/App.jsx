import ResultPage from "./components/ResultPage";
import SubjectList from "./components/subject/SubjectList";

function App() {
  return (
    <div>
      <div className="container mx-auto mt-10 p-4">

        <h1 className="text-3xl font-bold text-center mb-8 text-primary">
          First Capital University of Bangladesh
        </h1>

        {/* <ResultPage></ResultPage> */}
        <SubjectList />
      </div>
    </div>
  );
}

export default App;

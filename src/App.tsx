import { useState }   from "react";
  
import Title from "./components/Title";

function App() {
  const [isOpenedTitle, setOpened] = useState<boolean>(false);

  const showTitle = () => {
    setOpened(true)
  };
  if (isOpenedTitle === true) {
    return(
      <div>
        <Title name="sedan" type="bold" />
      </div>
    )
  };

  return (
    <>
      <button onClick={showTitle}>Open title</button>
    </>
  );
};

export default App;

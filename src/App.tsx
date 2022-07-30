import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Diorene tech</p>
      <Button
        size={"lg"}
        btnText={"Submit LG P"}
        variant={"primary"}
        onClick={() => console.log("CLICK LG P")}
      />
      <div className="separater"></div>
      <Button
        size={"lg"}
        btnText={"Submit LG S"}
        variant={"secondary"}
        onClick={() => console.log("CLICK LG S")}
      />
      <div className="separater"></div>
      <Button
        size={"md"}
        btnText={"Submit MD P"}
        variant={"primary"}
        onClick={() => console.log("CLICK MD P")}
      />
      <div className="separater"></div>
      <Button
        size={"md"}
        btnText={"Submit MD S"}
        variant={"secondary"}
        onClick={() => console.log("CLICK MD S")}
      />
      <div className="separater"></div>
      <Button
        size={"sm"}
        btnText={"Submit SM P"}
        variant={"primary"}
        onClick={() => console.log("CLICK SM P")}
      />
      <div className="separater"></div>
      <Button
        size={"sm"}
        btnText={"Submit SM S"}
        variant={"secondary"}
        onClick={() => console.log("CLICK SM S")}
      />
    </div>
  );
}

export default App;

import BackgroundUI from "BackgroundUI/App";
import NotificationUI from "NotificationUI/App";

function App() {
  return (
    <div className="flex flex-row justify-between min-w-full">
      <div className="bg-yellow-200 flex flex-col justify-center items-center min-h-screen">
        Containner
      </div>
      <BackgroundUI />
      <NotificationUI />
    </div>
  );
}

export default App;

import BackgroundUI from "BackgroundUI/App";
import NotificationUI from "NotificationUI/App";

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="relative">
        <BackgroundUI />
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <NotificationUI />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

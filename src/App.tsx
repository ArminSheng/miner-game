import React from "react";
import "./App.css";
import { Galaxy, LeftPanel } from "./components";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./data";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="scrollbar-thin scrollbar-thumb-main scrollbar-track-gray-second w-[100vw] h-[100vh] bg-[#191A29] flex overflow-x-hidden overflow-[overlay] mix-blend-overlay">
          <div className="w-[580px]">
            <LeftPanel />
          </div>
          <div className="flex-1">
            <Galaxy />
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;

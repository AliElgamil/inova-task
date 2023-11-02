import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/loading";
import Layout from "./components/layout";

const MainView = lazy(() => import("./pages/main"));
const ViewDetails = lazy(() => import("./pages/viewDetails"));

function App() {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <Layout>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/view-details/:id" element={<ViewDetails />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;

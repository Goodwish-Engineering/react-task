import Layout from "./Layout";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <>
      <ErrorBoundary>
          <Layout/>
      </ErrorBoundary>
    </>
  );
}

import Users from './components/Users';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Users />
      </ErrorBoundary>
    </div>
  );
}

export default App;

import React from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";

function BrokenComponent() {
  throw new Error("Error en el componente roto");
}

const TestError = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Prueba de Error Boundary</h1>
        <p>Este es un componente de prueba para verificar el Error Boundary.</p>
        <BrokenComponent />
      </div>
    </ErrorBoundary>
  );
};

export default TestError;

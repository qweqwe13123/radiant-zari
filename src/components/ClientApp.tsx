import { useEffect, useState } from "react";
import SpaApp from "@/SpaApp";

/**
 * Renders the client-side single-page application.
 * BrowserRouter relies on `window`, so we only mount after hydration.
 */
const ClientApp = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return <SpaApp />;
};

export default ClientApp;

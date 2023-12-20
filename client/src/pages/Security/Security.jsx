import { useEffect } from "react";

export default function Security() {
  useEffect(() => {
    console.log("use Effect");
  }, []);

  return <h1>Holis soy seguridad</h1>;
}

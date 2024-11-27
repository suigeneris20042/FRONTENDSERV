import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuthToken } from "../utils/authHelpers";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      router.push("/login"); // Redirige al login si no hay token
    }
  }, [router]);

  return <div>{children}</div>;
};

export default PrivateLayout;

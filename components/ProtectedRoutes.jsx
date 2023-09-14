import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const { status, data } = useSession();

  console.log({ data });

  return <div>{children}</div>;
};

export default ProtectedRoutes;

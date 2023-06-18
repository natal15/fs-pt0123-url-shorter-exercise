import { useEffect } from "react";
import { useLocation } from "wouter";
import { useUser } from "./useUser";

export const useGuard = (to = "/") => {
  const [, setLocation] = useLocation();
  const { data, isLoading } = useUser();

  useEffect(() => {
    data && setLocation(to);
  }, [data]);

  return { isLoading };
};

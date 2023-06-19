import { useMutation } from "react-query";
import { auth } from "../services";
import { useLocation } from "wouter";

export const useSignup = () => {
  const [location, setLocation] = useLocation();

  const { mutate } = useMutation({
    mutationFn: auth.register,
    onSuccess: (response) => {
      if (response.success) {
        // Handle successful signup, e.g., redirect to a success page
        console.log("Signup successful!");

        
        setLocation("/login");
        
      } else {
        // Handle signup error if needed
        console.log("Signup failed:", response.error);
      }
    },
  });


  return mutate;
};




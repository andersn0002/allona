import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../lib/store";
import { supabase } from "../lib/supabase";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const navigate = useNavigate();
  const { user, setUser } = useStore();

  useEffect(() => {
    // Check current auth status
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth/login");
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, setUser]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
}

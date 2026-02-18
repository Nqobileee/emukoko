"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { demoUser, type User } from "@/lib/mock-data";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const stored = localStorage.getItem("emukoko_auth");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("emukoko_auth");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 800));

    // Demo account check
    if (email === "demo@emukoko.org" && password === "DemoFarmer2026!") {
      setUser(demoUser);
      localStorage.setItem("emukoko_auth", JSON.stringify(demoUser));
      return { success: true };
    }

    // Accept any valid email/password for demo purposes
    if (email && password.length >= 6) {
      const newUser: User = {
        ...demoUser,
        id: "usr_" + Date.now(),
        email,
        name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      };
      setUser(newUser);
      localStorage.setItem("emukoko_auth", JSON.stringify(newUser));
      return { success: true };
    }

    return { success: false, error: "Invalid email or password. Try demo@emukoko.org / DemoFarmer2026!" };
  };

  const register = async (name: string, email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 800));

    if (!name || !email || password.length < 6) {
      return { success: false, error: "Please fill all fields. Password must be at least 6 characters." };
    }

    const newUser: User = {
      ...demoUser,
      id: "usr_" + Date.now(),
      email,
      name,
    };
    setUser(newUser);
    localStorage.setItem("emukoko_auth", JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("emukoko_auth");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

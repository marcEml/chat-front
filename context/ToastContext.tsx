import React, { useState, ReactNode, useContext, useCallback, createContext } from "react";

import ToastComponent from "@/components/ui/toast/Toast";

// TYPES

type ToastType = "default" | "success" | "critical";

// INTERFACES

interface ToastProps {
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastContextProps {
  showToast: (type: ToastType, message: string, duration?: number) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

// CONTEXT

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = useCallback((type: ToastType, message: string, duration: number = 2000) => {
    setToast({ type, message, duration });
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <ToastComponent
          showIcon={true}
          type={toast.type}
          message={toast.message}
          duration={toast.duration}
          onDismiss={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

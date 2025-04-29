import React from "react";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";

type AlertProps = {
  type: "success" | "error" | "info" | "warning";
  message: string;
  className?: string;
};

export default function Alert({ type, message, className = "" }: AlertProps) {
  const styles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: <XCircle className="h-5 w-5 text-red-500" />,
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: <Info className="h-5 w-5 text-blue-500" />,
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    },
  };

  const { bg, border, text, icon } = styles[type];

  return (
    <div
      className={`${bg} ${border} ${text} border p-3 rounded-md flex items-start gap-2 ${className}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>{message}</div>
    </div>
  );
}

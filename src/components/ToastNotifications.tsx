import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import "../styles/Toast.css";

export function ToastNotifications() {
    const context = useContext(ToastContext);

    if (!context) {
        return null;
    }

    const { toasts, removeToast } = context;

    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`toast toast-${toast.type}`}
                    role="alert"
                >
                    <div className="toast-content">
                        <span className="toast-message">{toast.message}</span>
                        <button
                            className="toast-close"
                            onClick={() => removeToast(toast.id)}
                            aria-label="Close notification"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

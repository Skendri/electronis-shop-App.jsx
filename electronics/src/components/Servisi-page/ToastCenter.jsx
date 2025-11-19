import React, { useCallback, useEffect, useRef, useState } from 'react';

let toastIdCounter = 1;

export function useToasts() {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const push = useCallback((message, opts = {}) => {
    const id = toastIdCounter++;
    const toast = { id, message, type: opts.type || 'info', duration: opts.duration ?? 5000 };
    setToasts((prev) => [...prev, toast]);
    return id;
  }, []);

  return { toasts, push, remove };
}

function ToastCenter({ toasts, onDismiss }) {
  return (
    <div className='toast-center'>
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onDismiss={() => onDismiss(t.id)} />
      ))}
    </div>
  );
}

function Toast({ toast, onDismiss }) {
  const timerRef = useRef(null);
  useEffect(() => {
    if (toast.duration === 0) return;
    timerRef.current = setTimeout(onDismiss, toast.duration);
    return () => clearTimeout(timerRef.current);
  }, [toast.duration, onDismiss]);

  return (
    <div className={`toast ${toast.type}`} role='status'>
      <span className='toast-dot' />
      <span className='toast-msg'>{toast.message}</span>
      <button className='icon-btn' onClick={onDismiss} aria-label='Dismiss'>✕</button>
    </div>
  );
}

export default ToastCenter;
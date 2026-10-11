import React, { useState, useEffect } from 'react';

export interface NotificationPayload {
    title: string;
    reason: string;
    suggestion?: string;
    type?: 'error' | 'warning' | 'success' | 'info';
}

// Global dispatcher function that can be called from anywhere
export function showAppNotification(payload: NotificationPayload | string) {
    const data: NotificationPayload = typeof payload === 'string'
        ? { title: 'Notification', reason: payload, type: 'info' }
        : payload;

    window.dispatchEvent(new CustomEvent('riot_notification', { detail: data }));
}

export const NotificationModal: React.FC = () => {
    const [currentNotification, setCurrentNotification] = useState<NotificationPayload | null>(null);

    useEffect(() => {
        const handleEvent = (e: Event) => {
            const detail = (e as CustomEvent<NotificationPayload>).detail;
            if (detail) {
                setCurrentNotification(detail);

                // Telegram Haptic Feedback
                try {
                    const tg = (window as any).Telegram?.WebApp;
                    if (tg?.HapticFeedback) {
                        if (detail.type === 'error') {
                            tg.HapticFeedback.notificationOccurred('error');
                        } else if (detail.type === 'warning') {
                            tg.HapticFeedback.notificationOccurred('warning');
                        } else if (detail.type === 'success') {
                            tg.HapticFeedback.notificationOccurred('success');
                        }
                    }
                } catch {}
            }
        };

        window.addEventListener('riot_notification', handleEvent);
        return () => window.removeEventListener('riot_notification', handleEvent);
    }, []);

    if (!currentNotification) return null;

    const { title, reason, suggestion, type = 'error' } = currentNotification;

    const isError = type === 'error';
    const isWarning = type === 'warning';
    const isSuccess = type === 'success';

    const borderColor = isError ? 'border-red-500/40' : isWarning ? 'border-amber-400/40' : isSuccess ? 'border-emerald-400/40' : 'border-[#FFD700]/40';
    const badgeBg = isError ? 'bg-red-500/10 text-red-400' : isWarning ? 'bg-amber-400/10 text-amber-300' : isSuccess ? 'bg-emerald-400/10 text-emerald-300' : 'bg-[#FFD700]/10 text-[#FFD700]';
    const iconName = isError ? 'report_problem' : isWarning ? 'warning_amber' : isSuccess ? 'check_circle' : 'info';
    const iconColor = isError ? 'text-red-400' : isWarning ? 'text-amber-400' : isSuccess ? 'text-emerald-400' : 'text-[#FFD700]';

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div 
                className={`relative w-full max-w-sm bg-[#111111] border ${borderColor} rounded-[28px] p-6 shadow-2xl shadow-black/90 flex flex-col items-center text-center`}
                style={{ animation: 'scaleUp 0.2s ease-out' }}
            >
                {/* Status Icon */}
                <div className={`w-16 h-16 rounded-full ${badgeBg} flex items-center justify-center mb-4 border ${borderColor}`}>
                    <span className={`material-icons-round text-3xl ${iconColor}`}>
                        {iconName}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-white tracking-wide uppercase font-display mb-2">
                    {title}
                </h3>

                {/* Reason Explanation */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 w-full mb-3 text-left">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                        Karan / Reason:
                    </p>
                    <p className="text-sm text-gray-200 leading-relaxed font-medium">
                        {reason}
                    </p>
                </div>

                {/* Actionable Suggestion */}
                {suggestion && (
                    <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-2xl p-3 w-full mb-4 text-left flex items-start gap-2.5">
                        <span className="material-icons-round text-[#FFD700] text-base mt-0.5 shrink-0">
                            lightbulb
                        </span>
                        <div className="text-xs text-[#FFD700]/90 leading-relaxed font-semibold">
                            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-black mb-0.5">
                                Kya Karein / Next Step:
                            </span>
                            {suggestion}
                        </div>
                    </div>
                )}

                {/* Close Button */}
                <button
                    onClick={() => setCurrentNotification(null)}
                    className="w-full bg-[#FFD700] text-black font-black uppercase text-xs tracking-widest py-3.5 rounded-xl border-none cursor-pointer transition-all active:scale-95 shadow-neon"
                >
                    Theek Hai / Dismiss
                </button>
            </div>
        </div>
    );
};

export default NotificationModal;

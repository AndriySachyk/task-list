import React, { createContext, useContext, useState, ReactNode } from 'react';

// Оголошення типів для статусу та функції встановлення статусу фільтрації
type Status = string | null;
type SetFilterFunction = (status: Status) => void;

// Створення контексту для фільтрації статусу
const StatusFilterContext = createContext<{ statusFilter: Status; setFilter: SetFilterFunction } | undefined>(undefined);

// Компонент провайдера для фільтрації статусу
export const StatusFilterProvider = ({ children }: { children: ReactNode }) => {
    const [statusFilter, setStatusFilter] = useState<Status>(null);

    // Функція для встановлення фільтра статусу
    const setFilter: SetFilterFunction = (status) => {
        setStatusFilter(status);
    }
    return (
        <StatusFilterContext.Provider value={{ statusFilter, setFilter }}>
            {children}
        </StatusFilterContext.Provider>
    );
}

export const useStatusFilter = () => {
    const context = useContext(StatusFilterContext);
    if (!context) {
        throw new Error('useStatusFilter must be used within a StatusFilterProvider');
    }
    return context;
};
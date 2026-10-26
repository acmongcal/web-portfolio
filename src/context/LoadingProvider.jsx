import { useCallback, useState } from "react";
import { LoadingContext } from "./LoadingContext";
import Loading from "../components/Loading";

export function LoadingProvider({ children }) {
    const [pendingRequests, setPendingRequests] = useState(0);
    const runWithLoading = useCallback(async (task) => {
        setPendingRequests((count) => count + 1);
        try {
            return await task();
        } finally {
            setPendingRequests((count) => Math.max(0, count - 1));
        }
    }, []);

    return (
        <LoadingContext.Provider
            value={{
                runWithLoading,
            }}
        >
            {children}
            {pendingRequests > 0 && <Loading />}
        </LoadingContext.Provider>
    );
}
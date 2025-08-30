import { toast } from "sonner";
import { arzwatch } from "@/actions";
import { useState, useCallback, useEffect } from "react";

function useArzWatch(category: InstrumentCategory) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [instruments, setInstruments] = useState<Instrument[]>([]);

	const fetchInstruments = useCallback(async () => {
		setIsLoading(true);
		try {
			const res = await arzwatch(category);

			if (!res.success || !res.data) {
				setError(res.error || "Failed to fetch instruments");
				setInstruments([]);
				return;
			}

			setError(null);
			setInstruments(res.data.results);
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred");
			setInstruments([]);
		} finally {
			setIsLoading(false);
		}
	}, [category]);

	useEffect(() => {
		fetchInstruments();
	}, [fetchInstruments]);

	useEffect(() => {
		if (error) {
			toast.error(error, { duration: 5000 });
		}
	}, [error]);

	return { instruments, isLoading, error, fetchInstruments };
}

export default useArzWatch;

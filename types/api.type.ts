/** ================================
 *  Error Types
 *  ================================ */

export const ErrorType = {
	BadRequest: "BadRequest",
	Unauthorized: "Unauthorized",
	Forbidden: "Forbidden",
	NotFound: "NotFound",
	Conflict: "Conflict",
	Internal: "Internal",
	TooManyRequests: "TooManyRequests",
	Timeout: "Timeout",
} as const;

export type ErrorType = keyof typeof ErrorType;

export const ErrorStatusMap: Record<ErrorType, number> = {
	BadRequest: 400,
	Unauthorized: 401,
	Forbidden: 403,
	NotFound: 404,
	Conflict: 409,
	Internal: 500,
	TooManyRequests: 429,
	Timeout: 408,
};

/** ================================
 *  Result Types
 *  ================================ */

export interface SuccessResult<T> {
	data: T;
	success: true;
	message: string;
}

export interface FailureResult {
	success: false;
	message: string;
	statusCode: number;
	type: ErrorType;
}

export type ApiResult<TData> = SuccessResult<TData> | FailureResult;

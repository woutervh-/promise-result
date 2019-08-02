export type PromiseResult<T> = PromisePending | PromiseRejected | PromiseFulfilled<T>;

export interface PromisePending {
    status: 'pending';
}

export interface PromiseRejected {
    status: 'rejected';
    error: Error;
}

export interface PromiseFulfilled<T> {
    status: 'fulfilled';
    result: T;
}

export const pending: PromisePending = { status: 'pending' };

export function createPending(): PromisePending {
    return pending;
}

export function createRejected(error: Error): PromiseRejected {
    return { status: 'rejected', error };
}

export function createFulfilled<T>(result: T): PromiseFulfilled<T> {
    return { status: 'fulfilled', result };
}

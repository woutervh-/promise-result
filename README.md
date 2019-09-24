# promise-result
Simple wrapper for promise results with status.

## Installation

```shell
npm install --save promise-result
```

## Example

Basic usage:

```typescript
import { PromiseResult, pending, createFulfilled, createRejected, isFulfilled, isPending, isRejected } from 'promise-result';


let state: PromiseResult<string> = pending;

const myPromise = fetch('https://example.org/')
  .then(() => {
      state = createFulfilled('Everything is OK!');
  })
  .catch((error) => {
      state = createRejected(error);
  });

function doSomethingWithState() {
    if (isFulfilled(state)) {
        // Show user the result...
        show(state.result);
    }

    if (isPending(state)) {
        // Show user a loading icon...
        show(loading);
    }

    if (isRejected(state)) {
        // Show error message to user...
        show(state.error.message);
    }
}

```

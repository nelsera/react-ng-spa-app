import { BehaviorSubject } from "rxjs";

export const store$ = new BehaviorSubject({
  result: localStorage.getItem("result"),
  error: false,
  pending: false,
});

const UPDATE_RESULT = (result) =>
  new Promise((resolve) => {
    store$.next({
      result: null,
      error: false,
      pending: true,
    });

    localStorage.setItem("result", result);

    resolve({
      result,
      error: false,
      pending: false,
    });
  });

export function updateResult(result) {
  UPDATE_RESULT(result).then((newValue) => {
    store$.next(newValue);
  });
}

export function clean() {
  localStorage.removeItem("result");

  store$.next({
    result: null,
    error: false,
  });
}

import reducer, { INITIAL_STATES } from "./reducer";

describe("reducer.auth", () => {
  it("should show authorizing when submitted username/password", () => {
    const _reducer = reducer(INITIAL_STATES, {
      type: "AUTH_REQUEST",
      payload: {
        username: "tawan",
        password: "1234",
      },
    });

    expect(_reducer).toStrictEqual({
      ...INITIAL_STATES,
      isAuthorizing: true,
      username: "tawan",
      password: "1234",
    });
  });

  it("should show authorized user", () => {
    const _reducer = reducer(INITIAL_STATES, {
      type: "AUTH_REQUEST",
      payload: {
        username: "tawan",
        password: "1234",
      },
    });

    const r = reducer(_reducer, {
      type: "AUTH_COMPLETED",
    });

    expect(r).toStrictEqual({
      ...INITIAL_STATES,
      isAuthorizing: false,
      isAuthorized: true,
      username: "tawan",
      password: "1234",
    });
  });
});

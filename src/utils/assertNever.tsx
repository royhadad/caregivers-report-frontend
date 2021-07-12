function assertNever(value: never) {
    throw new Error(`assertNever failed. Got "${value}" instead of never`);
}

export default assertNever;
export class Error {
  constructor(
    public errors: string[],
    public status: number
  ) { };
}

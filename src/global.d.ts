interface Navigator {
  contacts?: {
    getProperties(): Promise<string[]>;
    select(
      properties: string[],
      options: { multiple: boolean }
    ): Promise<object[]>;
  };
  deviceMemory?: number;
}

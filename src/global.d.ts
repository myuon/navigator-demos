interface Navigator {
  contacts?: {
    getProperties(): Promise<string[]>;
    select(
      properties: string[],
      options: { multiple: boolean }
    ): Promise<object[]>;
  };
  deviceMemory?: number;
  ink?: {
    requestPresenter(options: { presentationArea: HTMLElement }): Promise<{
      updateInkTrailStartPoint(
        evt: PointerEvent,
        style: {
          color: string;
          diameter: number;
        }
      ): void;
    }>;
  };
}

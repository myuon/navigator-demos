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
  keyboard?: {
    getLayoutMap(): Promise<Map<string, string>>;
  };
  virtualKeyboard?: {
    overlaysContent: boolean;
    show(): void;
    hide(): void;
    addEventListener(
      type: "geometrychange",
      listener: (
        event: Event & {
          target: {
            boundingRect: {
              x: number;
              y: number;
              width: number;
              height: number;
            };
          };
        }
      ) => void
    ): void;
  };
  getAutoplayPolicy(type: "audiocontext" | "mediaelement"): string;
  getBattery(): Promise<BatteryManager>;
}

class BatteryManager {
  readonly charging: boolean;
  readonly chargingTime: number;
  readonly dischargingTime: number;
  readonly level: number;
}

declare namespace JSX {
  interface IntrinsicElements {
    div: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > & {
      virtualkeyboardpolicy?: string;
    };
  }
}

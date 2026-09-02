export type EventMap = {
  launch: string;
  shutdown: number;
};

export class SimpleEventEmitter<T extends EventMap> {
  private listeners: {
    [K in keyof T]?: Array<(data: T[K]) => void>;
  } = {};

  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName]!.push(callback);
  }

  public emit<K extends keyof T>(eventName: K, data: T[K]): void {
    const callbacks = this.listeners[eventName];
    if (callbacks) {
      for (const callback of callbacks) {
        callback(data);
      }
    }
  }
}
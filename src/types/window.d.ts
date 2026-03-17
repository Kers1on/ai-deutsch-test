export {};

declare global {
  interface Window {
    api: {
      generateTest: (settings: any) => Promise<any>;
    };
  }
}
// Type declarations for AOS (Animate On Scroll)
// This is a placeholder for TypeScript definitions
export {};

declare module 'aos' {
  export interface AOS {
    init(options?: any): void;
    refresh(): void;
    refreshHard(): void;
  }
  const aos: AOS;
  export default aos;
}

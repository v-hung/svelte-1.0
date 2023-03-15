declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onclickOutside?: (e: CustomEvent) => void;
  }
}
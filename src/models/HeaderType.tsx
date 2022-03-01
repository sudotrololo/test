export type HeaderType = {
  searchInputHandler(event: React.ChangeEvent<HTMLInputElement>): void;
  inputValue: string; // значение инпута поиска
  filtered: number; // длина отфильтрованного массива
};

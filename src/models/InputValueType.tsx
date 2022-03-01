export type InputValueType = {
  searchInputHandler(event: React.ChangeEvent<HTMLInputElement>): void;
  name: string;
  inputValue: string; // значение инпута поиска
  filtered: number; // длина отфильтрованного массива
};

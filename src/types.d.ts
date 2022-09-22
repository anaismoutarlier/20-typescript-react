interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Toggle = (item: Todo) => void;

type Add = (text: string) => void;
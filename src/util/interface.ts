export interface ContentInterface {
  id: number;
  title: string;
  writer: string;
  createdAt: number;
  imgUrl: string;
  description: string;
}

export interface ContentListInterface extends Array<ContentInterface> {}

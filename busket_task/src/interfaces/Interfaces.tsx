export interface IHeader {
  LogoImg: string;
  UsedGuid: string;
  UserName: string;
}

interface IImage {
  FileName: string;
  FileExtension: string;
  Image: string;
}

export interface IProduct {
  Id: number;
  Name: string;
  Quantity: number;
  Price: number;
  Images: IImage[];
}

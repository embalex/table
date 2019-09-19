interface IFilterItem {
  caption: string;
  value: string;
}

export interface IFilter {
  caption: string;
  items: IFilterItem[];
}

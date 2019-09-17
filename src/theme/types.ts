export namespace  Theme {
  export interface IHeader {
    height: string;
  }

  export interface ILeftPanel {
    width: string;
  }
}

export interface ITheme {
  header: Theme.IHeader;
  leftPanel: Theme.ILeftPanel;
};

export interface IThemeWithProps {
  theme: ITheme;
};

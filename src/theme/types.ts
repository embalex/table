export namespace  Theme {
  export interface ICommon {
    reviewColor: {
      error: string;
      ok: string;
    };
    statusColor: {
      inProcess: string;
      finished: string;
    };
  }

  export interface IHeader {
    height: string;
  }

  export interface ILeftPanel {
    width: string;
  }
}

export interface ITheme {
  common: Theme.ICommon;
  header: Theme.IHeader;
  leftPanel: Theme.ILeftPanel;
};

export interface IThemeWithProps {
  theme: ITheme;
};

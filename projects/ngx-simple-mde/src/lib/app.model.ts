

export interface SimpleMdeConfiguration {
  autoDownloadFontAwesome?:        boolean;
  autofocus?:                      boolean;
  autosave?:                       AutoSave;
  blockStyles?:                    BlockStyles;
  element?:                        string;
  forceSync?:                      boolean;
  hideIcons?:                      string[];
  indentWithTabs?:                 boolean;
  initialValue?:                   string;
  insertTexts?:                    string[];
  lineWrapping?:                   boolean;
  parsingConfig?:                  ParsingConfig;
  placeholder?:                    string;
  previewRender?:                  any;
  promptURLs?:                     boolean;
  renderingConfig?:                RenderingConfig;
  shortcuts?:                      string[];
  showIcons?:                      string[];
  spellChecker?:                   boolean;
  status?:                         boolean | any;
  styleSelectedText?:              boolean;
  tabSize?:                        number;
  toolbar?:                        boolean | string[];
  toolbarTips?:                    boolean;
}

export interface AutoSave {
  enabled?:                        boolean;
  delay?:                          number;
  uniqueId?:                       number;
}

export interface BlockStyles {
  bold?:                           string;
  code?:                           string;
  italic?:                         string;
}

export interface ParsingConfig {
  allowAtxHeaderWithoutSpace?:     boolean;
  strikethrough?:                  boolean;
  underscoresBreakWords?:          boolean;
}

export interface RenderingConfig {
  singleLineBreaks:               boolean;
  codeSyntaxHighlighting:         boolean;
}

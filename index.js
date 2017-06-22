exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#202221',
    backgroundColor: '#e9e9e9',
    borderColor: '#e9e9e9 ',
    cursorColor: config.cursorColor || '#f28c97',
    colors: {
      black: '#131617',
      red: '#a11c37',
      green: '#72a958',
      yellow: '#ffff9b',
      blue: '#255593',
      magenta: '#bf61a0',
      cyan: '#60cccc',
      white: '#202221',
      lightBlack: '#171d1f',
      lightRed: '#ce264a',
      lightGreen: '#b3d581',
      lightYellow: '#ffffbf',
      lightBlue: '#23b9f6',
      lightMagenta: '#c375b7',
      lightCyan: '#78ffff',
      lightWhite: '#ffffff'
    },
    css: `
      ${config.css || ''}
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: #eebfb7 !important;
        top: 0;
        left: 0;
        right: 0;
      }
      .borderShim_nfs {
        display: none;
      }
      .tabs_nav {
        height: 38px;
        line-height: 38px;
      }
      ul.tabs_list {
        max-height: 38px;
        margin-left: 80px;
      }
      .tab_tab {
        padding-left: 0;
        border: none;
        border-left: 3px solid transparent;
        background-color: #eebfb7;
        transition: background-color .2s ease, border-color .2s ease;
      }
      .tab_active {
        background-color: #e9e9e9 !important;
        border-color: #f28c97 !important;
      }
      .tab_text {
        height: 38px;
        color: rgba(32, 34, 33, 0.5);
      }
      .tab_textActive {
        color: rgba(32, 34, 33, 1);
      }
      .tab_text, .tab_textActive {
        font-weight: 700;
      }
      .tab_hasActivity .tab_text, .tab_hasActivity:hover .tab_text {
        color: #cf274a;
      }
      .tab_icon {
        right: 18px;
        width: 18px;
        height: 18px;
        border-radius: 0px;
        color: white;
        font-weight: 700;
        font-size: 18px;
      }
      .tab_icon:hover {
        background-color: rgba(176, 47, 68, 1) !important;
      }
      .tab_shape {
        left: 5px;
        top: 5px;
        width: 8px;
        height: 8px;
        shape-rendering: initial !important;
      }
      .footer_footer .item_item {
        color: #202221;
      }
      .footer_footer:before {
        background-color: #202221;
      }
    `
  });
}

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
export default {
  // 使用GitHub主题的浅色和深色版本
  themes: ['github-light', 'github-dark'],

  // 默认属性配置
  defaultProps: {
    // 显示行号（可以在具体代码块中覆盖）
    showLineNumbers: true,
    // 启用代码换行
    wrap: false,
    // 保留缩进
    preserveIndent: true,
  },

  // 样式覆盖
  styleOverrides: {
    // 代码字体
    codeFontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace',

    // 代码字体大小
    codeFontSize: '0.875rem',

    // 行高
    codeLineHeight: '1.6',

    // 边框样式
    borderRadius: '0.75rem',
    borderWidth: '1px',

    // 内边距
    codePaddingInline: '1.25rem',
    codePaddingBlock: '1.25rem',

    // 框架样式
    frames: {
      // 阴影效果
      shadowColor: 'rgba(0, 0, 0, 0.1)',

      // 边框颜色
      editorActiveTabBorderColor: 'transparent',
      editorTabBarBorderBottomColor: '#e2e8f0',

      // 标题栏样式
      editorTabBarBackground: '#f8fafc',
      editorActiveTabBackground: '#ffffff',
      editorTabBorderRadius: '0.5rem 0.5rem 0 0',

      // 深色模式下的框架样式
      darkModeEditorTabBarBackground: '#0f172a',
      darkModeEditorActiveTabBackground: '#1e293b',
      darkModeEditorTabBarBorderBottomColor: '#334155',
    },

    // 滚动条样式
    scrollbarThumbColor: '#cbd5e1',
    scrollbarTrackColor: '#f1f5f9',

    // 深色模式滚动条
    darkModeScrollbarThumbColor: '#475569',
    darkModeScrollbarTrackColor: '#0f172a',
  },

  // 插件配置
  plugins: [
    // 可以在这里添加额外的插件
  ],

  // Shiki配置
  shiki: {
    // 可以添加额外的语言支持
    langs: [
      // 常用语言已经内置，这里可以添加特殊语言
      'astro',
      'mdx',
      'mermaid',
    ],

    // 主题配置
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },

    // 转换器配置
    transformers: [
      // 可以添加自定义转换器
    ],
  },

  // 自定义CSS注入
  customCSS: `
    /* 额外的自定义样式 */
    .expressive-code {
      /* 改善视觉层次 */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    /* 改善行号显示 */
    .expressive-code .line-numbers {
      user-select: none;
      color: #94a3b8;
      font-size: 0.75rem;
    }

    /* 深色模式行号 */
    .dark .expressive-code .line-numbers {
      color: #64748b;
    }

    /* 高亮行的样式 */
    .expressive-code .line.highlighted {
      background-color: rgba(59, 130, 246, 0.1);
      border-left: 3px solid #3b82f6;
      padding-left: 0.75rem;
      margin-left: -0.75rem;
    }

    .dark .expressive-code .line.highlighted {
      background-color: rgba(59, 130, 246, 0.2);
    }

    /* 选中文本的样式 */
    .expressive-code ::selection {
      background-color: rgba(59, 130, 246, 0.3);
    }

    .dark .expressive-code ::selection {
      background-color: rgba(59, 130, 246, 0.4);
    }

    /* 复制按钮样式 */
    .expressive-code .copy-button {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      color: #64748b;
      border-radius: 0.375rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      transition: all 0.2s ease;
    }

    .expressive-code .copy-button:hover {
      background: #e2e8f0;
      color: #475569;
    }

    .dark .expressive-code .copy-button {
      background: #1e293b;
      border-color: #334155;
      color: #94a3b8;
    }

    .dark .expressive-code .copy-button:hover {
      background: #334155;
      color: #e2e8f0;
    }

    /* 响应式设计 */
    @media (max-width: 768px) {
      .expressive-code {
        margin: 1rem -1rem;
        border-radius: 0;
      }

      .expressive-code pre {
        padding: 1rem;
        font-size: 0.8rem;
      }
    }
  `,
};

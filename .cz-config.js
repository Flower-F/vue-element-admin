module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    {
      value: 'style',
      name: 'style:    代码格式(空格、格式化、分号等)',
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构',
    },
    {
      value: 'perf',
      name: 'perf:     性能优化',
    },
    { value: 'test', name: 'test:     增加测试' },
    {
      value: 'chore',
      name: 'chore:    构建或辅助工具的变动',
    },
    { value: 'revert', name: 'revert:   回退到之前的提交' },
    { value: 'build', name: 'build:    打包' },
  ],
  messages: {
    type: '请选择你的提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请填写简要描述(必填):',
    body: '请填写详细描述(可选):',
    footer: '请输入要关闭的 issue:(可选)',
    confirmCommit: '确认使用以上信息提交吗?(y/n)',
  },
  skipQuestions: ['body', 'footer'],
  subjectLimit: 100,
};

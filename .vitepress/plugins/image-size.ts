import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

export function imageSizePlugin(md: MarkdownIt) {
  // 保存原始的图片渲染函数
  const defaultRender = md.renderer.rules.image || function(tokens: Token[], idx: number, options: any, env: any, self: any) {
    return self.renderToken(tokens, idx, options)
  }

  // 重写图片渲染规则
  md.renderer.rules.image = (tokens: Token[], idx: number, options: any, env: any, self: any) => {
    const token = tokens[idx]
    const srcIndex = token.attrIndex('src')
    const src = token.attrs?.[srcIndex]?.[1] || ''
    
    // 获取图片的 alt 文本
    const altText = token.content || ''
    
    // 检查 alt 文本中是否包含尺寸标记
    const sizeMatch = altText.match(/\|(\d+)$/)
    if (sizeMatch) {
      // 移除 alt 文本中的尺寸标记
      token.content = altText.replace(/\|\d+$/, '')
      
      // 添加宽度属性
      const width = sizeMatch[1]
      token.attrPush(['width', width])
      token.attrPush(['style', `width: ${width}px; max-width: 100%; height: auto;`])
    }

    return defaultRender(tokens, idx, options, env, self)
  }
} 
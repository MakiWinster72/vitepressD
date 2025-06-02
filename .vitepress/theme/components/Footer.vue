<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-title">Maki's life</div>
      <div class="footer-copyright">
        Copyright © 2024-2025 all rights reserved · 
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备2024180652号-1</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  margin-top: 48px;
  padding: 24px 0;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
}

.footer-content {
  max-width: var(--vp-home-width);
  margin: 0 auto;
}

.footer-title {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 8px;
}

.footer-copyright {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.footer-copyright a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.25s;
}

.footer-copyright a:hover {
  color: var(--vp-c-brand);
}
</style> 
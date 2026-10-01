export class Toast {
  private static container: HTMLElement | null = null;

  private static getContainer(): HTMLElement {
    if (!this.container) {
      this.container = document.getElementById('toast-container');
      if (!this.container) {
        this.container = document.createElement('div');
        this.container.id = 'toast-container';
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
      }
    }
    return this.container;
  }

  public static show(message: string, type: 'success' | 'info' | 'error' = 'success', duration = 4500): void {
    const container = this.getContainer();
    const toast = document.createElement('div');
    
    const bgClass = type === 'success' ? 'bg-primary text-on-primary' : type === 'error' ? 'bg-error text-on-error' : 'bg-inverse-surface text-inverse-on-surface';
    const icon = type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info';

    toast.className = `pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-featured font-sans font-medium text-sm max-w-md transition-all duration-300 transform translate-y-0 opacity-100 ${bgClass}`;

    toast.innerHTML = `
      <span class="material-symbols-outlined text-[20px] shrink-0">${icon}</span>
      <span class="leading-snug">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => {
        if (toast.parentElement) {
          toast.parentElement.removeChild(toast);
        }
      }, 300);
    }, duration);
  }
}

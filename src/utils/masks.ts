/**
 * Utility functions for input masking and formatting (Brazilian standard)
 */

/**
 * Mask Phone number dynamically for (XX) 9XXXX-XXXX or (XX) XXXX-XXXX
 */
export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  
  if (digits.length <= 2) {
    return digits.length > 0 ? `(${digits}` : '';
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

/**
 * Mask CPF (000.000.000-00) or CNPJ (00.000.000/0001-00) dynamically
 */
export function maskCpfCnpj(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 14);

  if (digits.length <= 11) {
    // CPF formatting
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
  } else {
    // CNPJ formatting
    if (digits.length <= 12) {
      return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
    }
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`;
  }
}

/**
 * Attach automatic masking listeners to standard form input fields
 */
export function applyInputMasks(formElement: HTMLElement | Document = document): void {
  // Phone inputs
  const phoneInputs = formElement.querySelectorAll<HTMLInputElement>('input[type="tel"], #form-celular, #contact-phone');
  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      target.value = maskPhone(target.value);
    });
  });

  // CPF / CNPJ inputs
  const docInputs = formElement.querySelectorAll<HTMLInputElement>('#form-cpf, #contact-cpf, input[name="cpf"], input[name="cnpj"]');
  docInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      target.value = maskCpfCnpj(target.value);
    });
  });
}

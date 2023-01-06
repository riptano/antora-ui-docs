export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
 

export const importEnlighterJS  = async () =>
  new Promise<any>((resolve, reject) => {
    if ('enlighter' in window) {
      return resolve(this);
    }

    const script = document.createElement('script');

    script.onload = () => resolve(this);
    script.onerror = reject;
    script.src = '/lib/enlighterjs.min.js';

    document.body.appendChild(script);
    
  });


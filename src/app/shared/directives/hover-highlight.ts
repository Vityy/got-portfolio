import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlight {

  private renderer: Renderer2 = inject(Renderer2);
  private elementRef: ElementRef = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'chartreuse');
  }

  @HostListener('mouseleave') onMouseLEave(){
    this.renderer.removeStyle(this.elementRef.nativeElement, 'color');
  }

}

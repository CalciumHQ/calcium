
import {
  Component, 
  Inject,
  OnInit,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'latex',
  template: `<div style="display:none"><ng-content></ng-content></div>`
})
export class LatexComponent implements OnInit {
  
  private _latexEl: HTMLElement;
  private _mutationObserver: MutationObserver;
  
  constructor(private _elementRef: ElementRef) {
    
    this._mutationObserver = new MutationObserver(this.onContentChanged.bind(this));
  }
  
  ngOnInit() {
    this._mutationObserver.observe(
      this._elementRef.nativeElement.children[0], 
      { childList: true, characterData: true, subtree: true }
    );
  }
  
  private onContentChanged(list) {
    let latex = list[0].target.data;
    let html = '$' + latex  + '$';
    
    let newLatexEl = document.createElement('SPAN');
    newLatexEl.innerHTML = html;
    
    if (this._latexEl) {
      this._elementRef.nativeElement.replaceChild(newLatexEl, this._latexEl);
    } else {
      this._elementRef.nativeElement.appendChild(newLatexEl);
    }
    
    this._latexEl = newLatexEl;
    MathJax.Hub.Typeset(this._latexEl, null);
  }
}
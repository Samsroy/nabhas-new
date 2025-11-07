import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  setPageTitle(title: string) {
    this.title.setTitle(title);
  }

  setPageDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  setPageKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  setOpenGraph(property: string, content: string) {
    this.meta.updateTag({ property, content });
  }

  setMetaTags(config: {
    title: string;
    description: string;
    keywords: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  }) {
    this.setPageTitle(config.title);
    this.setPageDescription(config.description);
    this.setPageKeywords(config.keywords);
    
    if (config.ogTitle) {
      this.setOpenGraph('og:title', config.ogTitle);
    }
    if (config.ogDescription) {
      this.setOpenGraph('og:description', config.ogDescription);
    }
    if (config.ogImage) {
      this.setOpenGraph('og:image', config.ogImage);
    }
  }

  resetMetaTags() {
    this.setPageTitle('Nabhas | Smart Partners Smart Future - Innovative Solutions');
    this.setPageDescription('Nabhas offers innovative, sustainable packaging solutions across Disposables, Retail, Foods & Cafes, Technologies, and Healthcare.');
    this.setPageKeywords('Nabhas, disposables, retail, food cafe solutions, healthcare solutions, technology solutions, sustainable packaging');
  }
}

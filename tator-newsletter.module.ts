import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TatorCoreModule } from '../tator-core/tator-core.module';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { TatorMailModule } from '../tator-mail/tator-mail.module';

@NgModule({
  declarations: [
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TatorCoreModule,
    TatorMailModule
  ],
  providers: [],
  exports: [
    NewsletterComponent
  ]
})
export class TatorNewsletterModule {
}

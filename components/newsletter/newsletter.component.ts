import { Component, Input } from '@angular/core';
import { MailEditorComponent } from '../../../tator-mail/components/mail-editor/mail-editor.component';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent extends MailEditorComponent {
  @Input() type = 'newsletter';
}

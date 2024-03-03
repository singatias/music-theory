import { Component, Input } from '@angular/core';
import { INoteInterval } from '../../models/INoteInterval';
import { NgFor, NgIf } from '@angular/common';
import { ToneService } from '../../services/tone.service';
import { InlineNoteComponent } from '../inline-note/inline-note.component';
import { INote } from '../../models/INote';

@Component({
  selector: 'app-note-clock',
  standalone: true,
  imports: [NgFor, NgIf, InlineNoteComponent],
  templateUrl: './note-clock.component.html',
  styleUrl: './note-clock.component.scss'
})
export class NoteClockComponent {

  constructor(private tone: ToneService) {

  }

  @Input() intervals: INoteInterval[] = [];
  @Input() selectedIntervals: INoteInterval[] = [];

  playNote(note: string) {
    this.tone.playNote(note, "4", "8n");
  }

  selectedNoteColor(note: INote) {
    return this.selectedIntervals.map(t => t.note.name).includes(note.name) ? 'blue' : 'black';
  }

  selectedIntervalColor(intervalName: string) {
    return this.selectedIntervals.map(t => t.name).includes(intervalName) ? 'blue' : 'black';
  }
}

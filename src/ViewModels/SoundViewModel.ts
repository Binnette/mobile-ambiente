import { SoundModel } from "../Models/SoundModel";

export class SoundViewModel {
  private $stop: JQuery<HTMLElement>;
  private $play: JQuery<HTMLElement>;
  private _selected: boolean;
  public get selected(): boolean {
    return this._selected;
  }
  public set selected(value: boolean) {
    this._selected = value;
    if (!this._selected) {
      this.$play.addClass("hidden");
      this.$stop.addClass("hidden");
    }
  }
  constructor($parent: JQuery<HTMLElement>, public readonly model: SoundModel) {
    const $sound = $(`
    <div class="ui basic button">
      <em data-emoji=":${model.emoji}:" class="medium"></em><br />
      ${model.name}
      ${
        model.type === "background"
          ? `
      <span class="ui right corner label">
          <i class="sync icon"></i>
      </span>`
          : ``
      }
    </div>
  `).appendTo($parent);
    this.$stop = $(`
<span class="hidden bottom floating ui red label">
  <i class="stop icon"></i>
</span>
`).appendTo($sound);
    this.$play = $(`
<span class="hidden bottom floating ui teal label">
  <i class="play icon"></i>
</span>
`).appendTo($sound);
    $sound.on("click", () => {
      model.toggle();
    });
    model.OnStateChange.on(state => {
      this.updateState(state);
    });
  }
  private updateState(state: "play" | "stop") {
    switch (state) {
      case "play":
        this.$play.removeClass("hidden");
        this.$stop.addClass("hidden");
        break;
      case "stop":
        this.$play.addClass("hidden");
        this.$stop.removeClass("hidden");
        break;
    }
  }
}

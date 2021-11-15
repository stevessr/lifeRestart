export default class cyberMain extends CyberMainUI {
    constructor() {
        super();
        this.btnRemake.on(Laya.Event.CLICK, this, ()=>UIManager.getInstance().switchView(UIManager.getInstance().themes.TALENT));
        this.btnAchievement.on(Laya.Event.CLICK, this, ()=>UIManager.getInstance().switchView(UIManager.getInstance().themes.ACHIEVEMENT));
        this.btnThanks.on(Laya.Event.CLICK, this, ()=>UIManager.getInstance().switchView(UIManager.getInstance().themes.THANKS));
        this.btnGithub.on(Laya.Event.CLICK, this, goto, ['github']);
        this.btnDiscord.on(Laya.Event.CLICK, this, goto, ['discord']);
        this.on(Laya.Event.RESIZE, this, () => {
            const scale = Math.max(
                this.width / this.imgBg.width,
                this.height / this.imgBg.height
            );
            this.imgBg.scale(scale, scale);
        });
    }

    init() {
        this.btnDiscord.visible =
        this.btnAchievement.visible =
        this.btnThanks.visible = !!core.times;
    }
}
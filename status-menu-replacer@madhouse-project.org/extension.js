const Main = imports.ui.main;
const Gettext = imports.gettext.domain('gnome-shell');
const _ = Gettext.gettext;

function main(metadata) {
    Main.panel._statusmenu._user.get_real_name = function () { return _("System"); };
    Main.panel._statusmenu._iconBox.hide();
}

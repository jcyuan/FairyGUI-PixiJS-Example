var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./WindowA"], function (require, exports, WindowA_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WindowWait = (function (_super) {
        __extends(WindowWait, _super);
        function WindowWait() {
            return _super.call(this) || this;
        }
        WindowWait.prototype.onShown = function () {
            _super.prototype.onShown.call(this);
            this.contentPane.getChild("n5").click(this.loadData, this);
        };
        WindowWait.prototype.loadData = function () {
            var _this = this;
            this.showModalWait("加载数据，请稍候...");
            clearTimeout(this.delayTimer);
            this.delayTimer = setTimeout(function () {
                _this.closeModalWait();
            }, 3000);
        };
        WindowWait.prototype.onHide = function () {
            clearTimeout(this.delayTimer);
            this.closeModalWait();
            this.contentPane.getChild("n5").removeClick(this.loadData, this);
        };
        return WindowWait;
    }(WindowA_1.WindowA));
    exports.WindowWait = WindowWait;
});
//# sourceMappingURL=WindowWait.js.map
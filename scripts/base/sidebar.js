
/**
 * Class sidebar
 * DVHAI 06/06/2021
 */
class SideBar {
    constructor(sidebarId) {
        let me = this;

        me.Sidebar = $(`${sidebarId}`);

        //khởi tạo các sự kiện trên sidebar
        me.initEvents();
    }

    /**
     * Hàm chứa các sự kiện trên sidebar
     * DVHAI 06/06/2021
     */
    initEvents() {
        let me = this;

        //Hàm ẩn thu gọn, mở rộng sidebar 
        me.toggleSidebar();

        //sự kiện click navbar
        me.itemClick();
    }


    /**
     * Khi click vào item trong navbar
     * màu của item thay đổi
     * DVHAI 08/06/2021
     */
    itemClick() {
        let me = this;

        me.Sidebar.find(".nav__item:not(:first-child)").on("click", function(){
            me.Sidebar.find(".nav__item:not(:first-child)").removeClass("dropdown__row--selected");
            $(this).addClass("dropdown__row--selected");
        });
    }

    /**
     * Hàm ẩn thu gọn, mở rộng sidebar 
     * khi click toggle icon
     * DVHAI 06/06/2021
     */
     toggleSidebar() {
        let me = this;

        me.Sidebar.find(".btnToggle").on("click", function () {
                me.Sidebar.toggleClass("collapsed-sidebar-width");
                // $(".wrapper").toggleClass("collapsed-sidebar-width");
        });
    }
}

var Sidebar = new SideBar("#sidebar");
